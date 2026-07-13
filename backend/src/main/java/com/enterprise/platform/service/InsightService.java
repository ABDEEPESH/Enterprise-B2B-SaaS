package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import com.enterprise.platform.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class InsightService {

    private final LeadRepository leadRepository;

    @Autowired
    public InsightService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public List<Insight> generateLeadInsights() {
        List<Insight> insights = new ArrayList<>();
        List<Lead> allLeads = leadRepository.findAll();

        insights.addAll(generateConversionRateInsights(allLeads));
        insights.addAll(generateIndustryTrendInsights(allLeads));
        insights.addAll(generateSourceEffectivenessInsights(allLeads));
        insights.addAll(generatePriorityDistributionInsights(allLeads));
        insights.addAll(generateTimeBasedInsights(allLeads));

        return insights;
    }

    private List<Insight> generateConversionRateInsights(List<Lead> leads) {
        List<Insight> insights = new ArrayList<>();
        
        long totalLeads = leads.size();
        long closedWonLeads = leads.stream()
                .filter(l -> l.getStatus() == Lead.LeadStatus.CLOSED_WON)
                .count();
        
        double conversionRate = totalLeads > 0 ? (double) closedWonLeads / totalLeads * 100 : 0;
        
        String message;
        String severity;
        
        if (conversionRate > 30) {
            message = String.format("Excellent conversion rate of %.1f%%. Your sales process is performing well.", conversionRate);
            severity = "positive";
        } else if (conversionRate > 20) {
            message = String.format("Good conversion rate of %.1f%%. Consider optimizing follow-up strategies.", conversionRate);
            severity = "info";
        } else if (conversionRate > 10) {
            message = String.format("Conversion rate of %.1f%% is below industry average. Review qualification criteria.", conversionRate);
            severity = "warning";
        } else {
            message = String.format("Low conversion rate of %.1f%%. Immediate attention needed on sales process.", conversionRate);
            severity = "critical";
        }
        
        insights.add(new Insight("conversion_rate", message, severity, Map.of(
                "conversionRate", conversionRate,
                "totalLeads", totalLeads,
                "closedWonLeads", closedWonLeads
        )));
        
        return insights;
    }

    private List<Insight> generateIndustryTrendInsights(List<Lead> leads) {
        List<Insight> insights = new ArrayList<>();
        
        Map<String, Long> industryCounts = leads.stream()
                .filter(l -> l.getIndustry() != null)
                .collect(Collectors.groupingBy(Lead::getIndustry, Collectors.counting()));
        
        if (!industryCounts.isEmpty()) {
            String topIndustry = industryCounts.entrySet().stream()
                    .max(Map.Entry.comparingByValue())
                    .map(Map.Entry::getKey)
                    .orElse("N/A");
            
            long topIndustryCount = industryCounts.getOrDefault(topIndustry, 0L);
            double percentage = (double) topIndustryCount / leads.size() * 100;
            
            insights.add(new Insight("industry_trend", 
                    String.format("%s is your top industry with %.1f%% of leads. Consider targeted marketing.", topIndustry, percentage),
                    "info",
                    Map.of("topIndustry", topIndustry, "percentage", percentage, "industryCounts", industryCounts)));
        }
        
        return insights;
    }

    private List<Insight> generateSourceEffectivenessInsights(List<Lead> leads) {
        List<Insight> insights = new ArrayList<>();
        
        Map<String, Long> sourceCounts = leads.stream()
                .filter(l -> l.getSource() != null)
                .collect(Collectors.groupingBy(Lead::getSource, Collectors.counting()));
        
        if (!sourceCounts.isEmpty()) {
            String topSource = sourceCounts.entrySet().stream()
                    .max(Map.Entry.comparingByValue())
                    .map(Map.Entry::getKey)
                    .orElse("N/A");
            
            insights.add(new Insight("source_effectiveness",
                    String.format("'%s' is your most effective lead source. Allocate more budget here.", topSource),
                    "positive",
                    Map.of("topSource", topSource, "sourceCounts", sourceCounts)));
        }
        
        return insights;
    }

    private List<Insight> generatePriorityDistributionInsights(List<Lead> leads) {
        List<Insight> insights = new ArrayList<>();
        
        long urgentLeads = leads.stream()
                .filter(l -> l.getPriority() == Lead.LeadPriority.URGENT)
                .count();
        
        long highLeads = leads.stream()
                .filter(l -> l.getPriority() == Lead.LeadPriority.HIGH)
                .count();
        
        if (urgentLeads > 0) {
            insights.add(new Insight("priority_alert",
                    String.format("You have %d urgent leads requiring immediate attention.", urgentLeads),
                    "critical",
                    Map.of("urgentLeads", urgentLeads, "highLeads", highLeads)));
        }
        
        return insights;
    }

    private List<Insight> generateTimeBasedInsights(List<Lead> leads) {
        List<Insight> insights = new ArrayList<>();
        
        LocalDateTime weekAgo = LocalDateTime.now().minusDays(7);
        long newLeadsThisWeek = leads.stream()
                .filter(l -> l.getCreatedAt() != null && l.getCreatedAt().isAfter(weekAgo))
                .count();
        
        LocalDateTime lastWeekStart = LocalDateTime.now().minusDays(14);
        LocalDateTime lastWeekEnd = LocalDateTime.now().minusDays(7);
        long newLeadsLastWeek = leads.stream()
                .filter(l -> l.getCreatedAt() != null && 
                        l.getCreatedAt().isAfter(lastWeekStart) && 
                        l.getCreatedAt().isBefore(lastWeekEnd))
                .count();
        
        double growthRate = newLeadsLastWeek > 0 ? 
                ((double) newLeadsThisWeek - newLeadsLastWeek) / newLeadsLastWeek * 100 : 0;
        
        String trendMessage;
        String severity;
        
        if (growthRate > 20) {
            trendMessage = String.format("Lead generation up by %.1f%% compared to last week. Great momentum!", growthRate);
            severity = "positive";
        } else if (growthRate > 0) {
            trendMessage = String.format("Lead generation up by %.1f%% compared to last week.", growthRate);
            severity = "info";
        } else if (growthRate > -20) {
            trendMessage = String.format("Lead generation down by %.1f%% compared to last week. Monitor closely.", Math.abs(growthRate));
            severity = "warning";
        } else {
            trendMessage = String.format("Lead generation down by %.1f%% compared to last week. Review marketing efforts.", Math.abs(growthRate));
            severity = "critical";
        }
        
        insights.add(new Insight("lead_trend", trendMessage, severity,
                Map.of("thisWeek", newLeadsThisWeek, "lastWeek", newLeadsLastWeek, "growthRate", growthRate)));
        
        return insights;
    }

    public static class Insight {
        private String type;
        private String message;
        private String severity;
        private Map<String, Object> data;
        private LocalDateTime generatedAt;

        public Insight(String type, String message, String severity, Map<String, Object> data) {
            this.type = type;
            this.message = message;
            this.severity = severity;
            this.data = data;
            this.generatedAt = LocalDateTime.now();
        }

        public String getType() { return type; }
        public void setType(String type) { this.type = type; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }

        public String getSeverity() { return severity; }
        public void setSeverity(String severity) { this.severity = severity; }

        public Map<String, Object> getData() { return data; }
        public void setData(Map<String, Object> data) { this.data = data; }

        public LocalDateTime getGeneratedAt() { return generatedAt; }
        public void setGeneratedAt(LocalDateTime generatedAt) { this.generatedAt = generatedAt; }
    }
}
