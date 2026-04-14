package com.enterprise.platform.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;
import java.util.Objects;

/**
 * Data Transfer Object for lead response data.
 * 
 * This DTO provides a clean, standardized response format for lead data
 * returned by the API. It includes only the necessary fields and formats
 * dates appropriately for frontend consumption.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
public class LeadResponse {

    private String id;
    
    @JsonProperty("first_name")
    private String firstName;
    
    @JsonProperty("last_name")
    private String lastName;
    
    private String email;
    
    private String phone;
    
    @JsonProperty("company_name")
    private String companyName;
    
    @JsonProperty("job_title")
    private String jobTitle;
    
    @JsonProperty("company_size")
    private String companySize;
    
    private String industry;
    
    @JsonProperty("service_interest")
    private String serviceInterest;
    
    @JsonProperty("budget_range")
    private String budgetRange;
    
    private String timeline;
    
    private String message;
    
    private String source;
    
    private String status;
    
    @JsonProperty("assigned_to")
    private String assignedTo;
    
    private String priority;
    
    private String tags;
    
    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private LocalDateTime createdAt;
    
    @JsonProperty("updated_at")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private LocalDateTime updatedAt;

    /**
     * Default constructor.
     */
    public LeadResponse() {
    }

    /**
     * Parameterized constructor for essential lead information.
     * 
     * @param id Lead unique identifier
     * @param firstName First name of the lead
     * @param lastName Last name of the lead
     * @param email Email address of the lead
     * @param companyName Company name of the lead
     */
    public LeadResponse(String id, String firstName, String lastName, String email, String companyName) {
        this.id = id;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
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
     * Returns the full name of the lead.
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
        LeadResponse that = (LeadResponse) o;
        return Objects.equals(id, that.id) &&
               Objects.equals(firstName, that.firstName) &&
               Objects.equals(lastName, that.lastName) &&
               Objects.equals(email, that.email) &&
               Objects.equals(phone, that.phone) &&
               Objects.equals(companyName, that.companyName) &&
               Objects.equals(jobTitle, that.jobTitle) &&
               Objects.equals(companySize, that.companySize) &&
               Objects.equals(industry, that.industry) &&
               Objects.equals(serviceInterest, that.serviceInterest) &&
               Objects.equals(budgetRange, that.budgetRange) &&
               Objects.equals(timeline, that.timeline) &&
               Objects.equals(message, that.message) &&
               Objects.equals(source, that.source) &&
               Objects.equals(status, that.status) &&
               Objects.equals(assignedTo, that.assignedTo) &&
               Objects.equals(priority, that.priority) &&
               Objects.equals(tags, that.tags) &&
               Objects.equals(createdAt, that.createdAt) &&
               Objects.equals(updatedAt, that.updatedAt);
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
        return "LeadResponse{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", companyName='" + companyName + '\'' +
                ", status='" + status + '\'' +
                ", priority='" + priority + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
