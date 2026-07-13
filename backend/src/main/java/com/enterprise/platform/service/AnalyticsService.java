package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import com.enterprise.platform.dto.AnalyticsResponse;
import com.enterprise.platform.repository.LeadRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AnalyticsService {

    private final LeadRepository leadRepository;

    public AnalyticsService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public AnalyticsResponse getAnalytics(LocalDateTime startDate, LocalDateTime endDate) {
        List<Lead> leads = leadRepository.findByCreatedAtBetween(startDate, endDate);
        
        AnalyticsResponse response = new AnalyticsResponse();
        response.setPeriodStart(startDate);
        response.setPeriodEnd(endDate);
        
        response.setTotalLeads((long) leads.size());
        response.setNewLeads(leads.stream().filter(l -> l.getStatus() == Lead.LeadStatus.NEW).count());
        response.setQualifiedLeads(leads.stream().filter(l -> l.getStatus() == Lead.LeadStatus.QUALIFIED).count());
        response.setClosedWonLeads(leads.stream().filter(l -> l.getStatus() == Lead.LeadStatus.CLOSED_WON).count());
        
        long totalLeads = response.getTotalLeads();
        if (totalLeads > 0) {
            long converted = response.getClosedWonLeads();
            response.setConversionRate((converted * 100) / totalLeads);
        } else {
            response.setConversionRate(0L);
        }
        
        response.setLeadsByIndustry(groupLeadsByIndustry(leads));
        response.setLeadsBySource(groupLeadsBySource(leads));
        response.setLeadsByStatus(groupLeadsByStatus(leads));
        
        response.setAverageDealSize(calculateAverageDealSize(leads));
        response.setTotalRevenue(calculateTotalRevenue(leads));
        
        return response;
    }

    private Map<String, Long> groupLeadsByIndustry(List<Lead> leads) {
        return leads.stream()
                .filter(l -> l.getIndustry() != null)
                .collect(Collectors.groupingBy(
                        Lead::getIndustry,
                        Collectors.counting()
                ));
    }

    private Map<String, Long> groupLeadsBySource(List<Lead> leads) {
        return leads.stream()
                .filter(l -> l.getSource() != null)
                .collect(Collectors.groupingBy(
                        Lead::getSource,
                        Collectors.counting()
                ));
    }

    private Map<String, Long> groupLeadsByStatus(List<Lead> leads) {
        return leads.stream()
                .collect(Collectors.groupingBy(
                        l -> l.getStatus().getDisplayName(),
                        Collectors.counting()
                ));
    }

    private Double calculateAverageDealSize(List<Lead> leads) {
        return 0.0;
    }

    private Long calculateTotalRevenue(List<Lead> leads) {
        return 0L;
    }
}
