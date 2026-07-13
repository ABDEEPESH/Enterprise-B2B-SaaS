package com.enterprise.platform.dto;

import java.time.LocalDateTime;
import java.util.Map;

public class AnalyticsResponse {
    private LocalDateTime periodStart;
    private LocalDateTime periodEnd;
    private Long totalLeads;
    private Long newLeads;
    private Long qualifiedLeads;
    private Long closedWonLeads;
    private Long conversionRate;
    private Map<String, Long> leadsByIndustry;
    private Map<String, Long> leadsBySource;
    private Map<String, Long> leadsByStatus;
    private Double averageDealSize;
    private Long totalRevenue;

    public AnalyticsResponse() {
    }

    public LocalDateTime getPeriodStart() {
        return periodStart;
    }

    public void setPeriodStart(LocalDateTime periodStart) {
        this.periodStart = periodStart;
    }

    public LocalDateTime getPeriodEnd() {
        return periodEnd;
    }

    public void setPeriodEnd(LocalDateTime periodEnd) {
        this.periodEnd = periodEnd;
    }

    public Long getTotalLeads() {
        return totalLeads;
    }

    public void setTotalLeads(Long totalLeads) {
        this.totalLeads = totalLeads;
    }

    public Long getNewLeads() {
        return newLeads;
    }

    public void setNewLeads(Long newLeads) {
        this.newLeads = newLeads;
    }

    public Long getQualifiedLeads() {
        return qualifiedLeads;
    }

    public void setQualifiedLeads(Long qualifiedLeads) {
        this.qualifiedLeads = qualifiedLeads;
    }

    public Long getClosedWonLeads() {
        return closedWonLeads;
    }

    public void setClosedWonLeads(Long closedWonLeads) {
        this.closedWonLeads = closedWonLeads;
    }

    public Long getConversionRate() {
        return conversionRate;
    }

    public void setConversionRate(Long conversionRate) {
        this.conversionRate = conversionRate;
    }

    public Map<String, Long> getLeadsByIndustry() {
        return leadsByIndustry;
    }

    public void setLeadsByIndustry(Map<String, Long> leadsByIndustry) {
        this.leadsByIndustry = leadsByIndustry;
    }

    public Map<String, Long> getLeadsBySource() {
        return leadsBySource;
    }

    public void setLeadsBySource(Map<String, Long> leadsBySource) {
        this.leadsBySource = leadsBySource;
    }

    public Map<String, Long> getLeadsByStatus() {
        return leadsByStatus;
    }

    public void setLeadsByStatus(Map<String, Long> leadsByStatus) {
        this.leadsByStatus = leadsByStatus;
    }

    public Double getAverageDealSize() {
        return averageDealSize;
    }

    public void setAverageDealSize(Double averageDealSize) {
        this.averageDealSize = averageDealSize;
    }

    public Long getTotalRevenue() {
        return totalRevenue;
    }

    public void setTotalRevenue(Long totalRevenue) {
        this.totalRevenue = totalRevenue;
    }
}
