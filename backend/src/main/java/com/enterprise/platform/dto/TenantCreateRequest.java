package com.enterprise.platform.dto;

import com.enterprise.platform.domain.Tenant;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class TenantCreateRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @NotBlank(message = "Slug is required")
    @Size(min = 2, max = 50, message = "Slug must be between 2 and 50 characters")
    private String slug;

    private String domain;
    private String contactEmail;
    private String contactPhone;
    private String billingAddress;
    private Tenant.TenantPlan plan;

    public TenantCreateRequest() {
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

    public Tenant.TenantPlan getPlan() {
        return plan;
    }

    public void setPlan(Tenant.TenantPlan plan) {
        this.plan = plan;
    }
}
