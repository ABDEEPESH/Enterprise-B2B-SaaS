package com.enterprise.platform.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.Objects;

/**
 * Data Transfer Object for lead creation requests.
 * 
 * This DTO captures and validates incoming lead data from web forms and API calls.
 * It uses Jakarta Bean Validation annotations to ensure data integrity and follows
 * pure Java 21 patterns without Lombok.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
public class LeadCreateRequest {

    @NotBlank(message = "First name is required")
    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
    @Pattern(regexp = "^[a-zA-Z\\s\\-']+$", message = "First name can only contain letters, spaces, hyphens, and apostrophes")
    @JsonProperty("first_name")
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(min = 2, max = 50, message = "Last name must be between 2 and 50 characters")
    @Pattern(regexp = "^[a-zA-Z\\s\\-']+$", message = "Last name can only contain letters, spaces, hyphens, and apostrophes")
    @JsonProperty("last_name")
    private String lastName;

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    @Size(max = 100, message = "Email must not exceed 100 characters")
    private String email;

    @Pattern(regexp = "^[+]?[1-9]\\d{1,14}$", message = "Please provide a valid phone number in international format")
    @Size(max = 20, message = "Phone number must not exceed 20 characters")
    private String phone;

    @NotBlank(message = "Company name is required")
    @Size(min = 2, max = 100, message = "Company name must be between 2 and 100 characters")
    @JsonProperty("company_name")
    private String companyName;

    @Size(max = 100, message = "Job title must not exceed 100 characters")
    @JsonProperty("job_title")
    private String jobTitle;

    @Pattern(regexp = "^(1-10|11-50|51-200|201-500|501-1000|1001-5000|5000+)$", 
             message = "Company size must be one of: 1-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5000+")
    @JsonProperty("company_size")
    private String companySize;

    @Pattern(regexp = "^(fintech|healthtech|ecommerce|logistics|ai|manufacturing|retail|education|government|other)$", 
             message = "Industry must be one of: fintech, healthtech, ecommerce, logistics, ai, manufacturing, retail, education, government, other")
    private String industry;

    @Pattern(regexp = "^(strategy|design|development|cloud|security|consulting|all)$", 
             message = "Service interest must be one of: strategy, design, development, cloud, security, consulting, all")
    @JsonProperty("service_interest")
    private String serviceInterest;

    @Pattern(regexp = "^(10k-25k|25k-50k|50k-100k|100k-250k|250k-500k|500k+)$", 
             message = "Budget range must be one of: 10k-25k, 25k-50k, 50k-100k, 100k-250k, 250k-500k, 500k+")
    @JsonProperty("budget_range")
    private String budgetRange;

    @Pattern(regexp = "^(immediate|1-3-months|3-6-months|6-12-months|12-months+)$", 
             message = "Timeline must be one of: immediate, 1-3-months, 3-6-months, 6-12-months, 12-months+")
    private String timeline;

    @Size(max = 2000, message = "Message must not exceed 2000 characters")
    private String message;

    @Pattern(regexp = "^(website|referral|social|email|event|cold-call|other)$", 
             message = "Source must be one of: website, referral, social, email, event, cold-call, other")
    private String source;

    /**
     * Default constructor.
     */
    public LeadCreateRequest() {
        this.source = "website";
    }

    /**
     * Parameterized constructor for essential lead information.
     * 
     * @param firstName First name of the lead
     * @param lastName Last name of the lead
     * @param email Email address of the lead
     * @param companyName Company name of the lead
     */
    public LeadCreateRequest(String firstName, String lastName, String email, String companyName) {
        this();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.companyName = companyName;
    }

    // Getters and Setters

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
        LeadCreateRequest that = (LeadCreateRequest) o;
        return Objects.equals(firstName, that.firstName) &&
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
               Objects.equals(source, that.source);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, email, phone, companyName, 
                           jobTitle, companySize, industry, serviceInterest, 
                           budgetRange, timeline, message, source);
    }

    @Override
    public String toString() {
        return "LeadCreateRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", companyName='" + companyName + '\'' +
                ", industry='" + industry + '\'' +
                ", serviceInterest='" + serviceInterest + '\'' +
                '}';
    }
}
