package com.enterprise.platform.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

/**
 * Enterprise Lead entity representing potential B2B customers.
 * 
 * This domain model captures comprehensive lead information for enterprise
 * sales and marketing operations. It follows pure Java 21 patterns without
 * using Lombok annotations.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@Document(collection = "leads")
public class Lead {

    @Id
    private String id;
    
    @Field("first_name")
    private String firstName;
    
    @Field("last_name")
    private String lastName;
    
    @Field("email")
    private String email;
    
    @Field("phone")
    private String phone;
    
    @Field("company_name")
    private String companyName;
    
    @Field("job_title")
    private String jobTitle;
    
    @Field("company_size")
    private String companySize;
    
    @Field("industry")
    private String industry;
    
    @Field("service_interest")
    private String serviceInterest;
    
    @Field("budget_range")
    private String budgetRange;
    
    @Field("timeline")
    private String timeline;
    
    @Field("message")
    private String message;
    
    @Field("source")
    private String source;
    
    @Field("status")
    private LeadStatus status;
    
    @Field("assigned_to")
    private String assignedTo;
    
    @Field("priority")
    private LeadPriority priority;
    
    @Field("tags")
    private String tags;
    
    @CreatedDate
    @Field("created_at")
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Field("updated_at")
    private LocalDateTime updatedAt;

    /**
     * Default constructor for JPA/MongoDB.
     */
    public Lead() {
        this.id = UUID.randomUUID().toString();
        this.status = LeadStatus.NEW;
        this.priority = LeadPriority.MEDIUM;
        this.source = "WEBSITE";
    }

    /**
     * Parameterized constructor for lead creation.
     * 
     * @param firstName First name of the lead contact
     * @param lastName Last name of the lead contact
     * @param email Email address of the lead
     * @param companyName Company name of the lead
     */
    public Lead(String firstName, String lastName, String email, String companyName) {
        this();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.companyName = companyName;
    }

    // Getters and Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getCompanySize() {
        return companySize;
    }

    public void setCompanySize(String companySize) {
        this.companySize = companySize;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getServiceInterest() {
        return serviceInterest;
    }

    public void setServiceInterest(String serviceInterest) {
        this.serviceInterest = serviceInterest;
    }

    public String getBudgetRange() {
        return budgetRange;
    }

    public void setBudgetRange(String budgetRange) {
        this.budgetRange = budgetRange;
    }

    public String getTimeline() {
        return timeline;
    }

    public void setTimeline(String timeline) {
        this.timeline = timeline;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public LeadStatus getStatus() {
        return status;
    }

    public void setStatus(LeadStatus status) {
        this.status = status;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public LeadPriority getPriority() {
        return priority;
    }

    public void setPriority(LeadPriority priority) {
        this.priority = priority;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
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

    /**
     * Lead status enumeration representing the sales pipeline stages.
     */
    public enum LeadStatus {
        NEW("New"),
        CONTACTED("Contacted"),
        QUALIFIED("Qualified"),
        PROPOSAL("Proposal"),
        NEGOTIATION("Negotiation"),
        CLOSED_WON("Closed Won"),
        CLOSED_LOST("Closed Lost");

        private final String displayName;

        LeadStatus(String displayName) {
            this.displayName = displayName;
        }

        public String getDisplayName() {
            return displayName;
        }
    }

    /**
     * Lead priority enumeration for sales team prioritization.
     */
    public enum LeadPriority {
        LOW("Low"),
        MEDIUM("Medium"),
        HIGH("High"),
        URGENT("Urgent");

        private final String displayName;

        LeadPriority(String displayName) {
            this.displayName = displayName;
        }

        public String getDisplayName() {
            return displayName;
        }
    }

    /**
     * Returns the full name of the lead contact.
     * 
     * @return Full name or null if both first and last name are null
     */
    public String getFullName() {
        if (firstName == null && lastName == null) {
            return null;
        }
        if (firstName == null) {
            return lastName;
        }
        if (lastName == null) {
            return firstName;
        }
        return firstName + " " + lastName;
    }

    // equals, hashCode, and toString methods

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lead lead = (Lead) o;
        return Objects.equals(id, lead.id) &&
               Objects.equals(firstName, lead.firstName) &&
               Objects.equals(lastName, lead.lastName) &&
               Objects.equals(email, lead.email) &&
               Objects.equals(phone, lead.phone) &&
               Objects.equals(companyName, lead.companyName) &&
               Objects.equals(jobTitle, lead.jobTitle) &&
               Objects.equals(companySize, lead.companySize) &&
               Objects.equals(industry, lead.industry) &&
               Objects.equals(serviceInterest, lead.serviceInterest) &&
               Objects.equals(budgetRange, lead.budgetRange) &&
               Objects.equals(timeline, lead.timeline) &&
               Objects.equals(message, lead.message) &&
               Objects.equals(source, lead.source) &&
               status == lead.status &&
               Objects.equals(assignedTo, lead.assignedTo) &&
               priority == lead.priority &&
               Objects.equals(tags, lead.tags) &&
               Objects.equals(createdAt, lead.createdAt) &&
               Objects.equals(updatedAt, lead.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email, phone, companyName, 
                           jobTitle, companySize, industry, serviceInterest, 
                           budgetRange, timeline, message, source, status, 
                           assignedTo, priority, tags, createdAt, updatedAt);
    }

    @Override
    public String toString() {
        return "Lead{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", companyName='" + companyName + '\'' +
                ", status=" + status +
                ", priority=" + priority +
                ", createdAt=" + createdAt +
                '}';
    }
}
