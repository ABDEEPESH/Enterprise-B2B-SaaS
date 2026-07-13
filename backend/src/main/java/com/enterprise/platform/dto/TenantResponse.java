package com.enterprise.platform.dto;

import com.enterprise.platform.domain.Tenant;

import java.time.LocalDateTime;

public class TenantResponse {

    private String id;
    private String name;
    private String slug;
    private String domain;
    private Tenant.TenantStatus status;
    private Tenant.TenantPlan plan;
    private Integer maxUsers;
    private Integer maxLeads;
    private String logoUrl;
    private String primaryColor;
    private String contactEmail;
    private String contactPhone;
    private String billingAddress;
    private LocalDateTime trialEndDate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public TenantResponse() {
    }

    public TenantResponse(Tenant tenant) {
        this.id = tenant.getId();
        this.name = tenant.getName();
        this.slug = tenant.getSlug();
        this.domain = tenant.getDomain();
        this.status = tenant.getStatus();
        this.plan = tenant.getPlan();
        this.maxUsers = tenant.getMaxUsers();
        this.maxLeads = tenant.getMaxLeads();
        this.logoUrl = tenant.getLogoUrl();
        this.primaryColor = tenant.getPrimaryColor();
        this.contactEmail = tenant.getContactEmail();
        this.contactPhone = tenant.getContactPhone();
        this.billingAddress = tenant.getBillingAddress();
        this.trialEndDate = tenant.getTrialEndDate();
        this.createdAt = tenant.getCreatedAt();
        this.updatedAt = tenant.getUpdatedAt();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public Tenant.TenantStatus getStatus() {
        return status;
    }

    public void setStatus(Tenant.TenantStatus status) {
        this.status = status;
    }

    public Tenant.TenantPlan getPlan() {
        return plan;
    }

    public void setPlan(Tenant.TenantPlan plan) {
        this.plan = plan;
    }

    public Integer getMaxUsers() {
        return maxUsers;
    }

    public void setMaxUsers(Integer maxUsers) {
        this.maxUsers = maxUsers;
    }

    public Integer getMaxLeads() {
        return maxLeads;
    }

    public void setMaxLeads(Integer maxLeads) {
        this.maxLeads = maxLeads;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public String getPrimaryColor() {
        return primaryColor;
    }

    public void setPrimaryColor(String primaryColor) {
        this.primaryColor = primaryColor;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    public LocalDateTime getTrialEndDate() {
        return trialEndDate;
    }

    public void setTrialEndDate(LocalDateTime trialEndDate) {
        this.trialEndDate = trialEndDate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
