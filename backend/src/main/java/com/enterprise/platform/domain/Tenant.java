package com.enterprise.platform.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

@Document(collection = "tenants")
public class Tenant {

    @Id
    private String id;
    
    @Field("name")
    @Indexed(unique = true)
    private String name;
    
    @Field("slug")
    @Indexed(unique = true)
    private String slug;
    
    @Field("domain")
    private String domain;
    
    @Field("status")
    private TenantStatus status;
    
    @Field("plan")
    private TenantPlan plan;
    
    @Field("max_users")
    private Integer maxUsers;
    
    @Field("max_leads")
    private Integer maxLeads;
    
    @Field("settings")
    private String settings;
    
    @Field("logo_url")
    private String logoUrl;
    
    @Field("primary_color")
    private String primaryColor;
    
    @Field("contact_email")
    private String contactEmail;
    
    @Field("contact_phone")
    private String contactPhone;
    
    @Field("billing_address")
    private String billingAddress;
    
    @Field("trial_end_date")
    private LocalDateTime trialEndDate;
    
    @CreatedDate
    @Field("created_at")
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Field("updated_at")
    private LocalDateTime updatedAt;

    public Tenant() {
        this.id = UUID.randomUUID().toString();
        this.status = TenantStatus.ACTIVE;
        this.plan = TenantPlan.STARTER;
        this.maxUsers = 10;
        this.maxLeads = 100;
    }

    public Tenant(String name, String slug) {
        this();
        this.name = name;
        this.slug = slug;
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

    public TenantStatus getStatus() {
        return status;
    }

    public void setStatus(TenantStatus status) {
        this.status = status;
    }

    public TenantPlan getPlan() {
        return plan;
    }

    public void setPlan(TenantPlan plan) {
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

    public String getSettings() {
        return settings;
    }

    public void setSettings(String settings) {
        this.settings = settings;
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

    public boolean isTrialActive() {
        return trialEndDate != null && trialEndDate.isAfter(LocalDateTime.now());
    }

    public boolean canAddUser(int currentUserCount) {
        return maxUsers == null || currentUserCount < maxUsers;
    }

    public boolean canAddLead(int currentLeadCount) {
        return maxLeads == null || currentLeadCount < maxLeads;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tenant tenant = (Tenant) o;
        return Objects.equals(id, tenant.id) && Objects.equals(slug, tenant.slug);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, slug);
    }

    @Override
    public String toString() {
        return "Tenant{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", slug='" + slug + '\'' +
                ", status=" + status +
                ", plan=" + plan +
                '}';
    }

    public enum TenantStatus {
        ACTIVE("Active"),
        SUSPENDED("Suspended"),
        TRIAL("Trial"),
        CANCELLED("Cancelled");

        private final String displayName;

        TenantStatus(String displayName) {
            this.displayName = displayName;
        }

        public String getDisplayName() {
            return displayName;
        }
    }

    public enum TenantPlan {
        STARTER("Starter", 10, 100),
        PROFESSIONAL("Professional", 50, 1000),
        ENTERPRISE("Enterprise", -1, -1);

        private final String displayName;
        private final int maxUsers;
        private final int maxLeads;

        TenantPlan(String displayName, int maxUsers, int maxLeads) {
            this.displayName = displayName;
            this.maxUsers = maxUsers;
            this.maxLeads = maxLeads;
        }

        public String getDisplayName() {
            return displayName;
        }

        public int getMaxUsers() {
            return maxUsers;
        }

        public int getMaxLeads() {
            return maxLeads;
        }
    }
}
