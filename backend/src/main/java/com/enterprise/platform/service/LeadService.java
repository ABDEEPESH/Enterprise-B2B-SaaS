package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import com.enterprise.platform.dto.LeadCreateRequest;
import com.enterprise.platform.dto.LeadResponse;
import com.enterprise.platform.exception.DuplicateLeadException;
import com.enterprise.platform.exception.LeadNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service layer for lead management operations.
 * 
 * This service provides business logic for lead creation, retrieval, updates,
 * and other lead-related operations. It implements proper error handling,
 * validation, and follows enterprise patterns for service layer design.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@Service
@Transactional
public class LeadService {

    private final LeadRepository leadRepository;

    /**
     * Constructor-based dependency injection.
     * 
     * @param leadRepository The lead repository for data access
     */
    @Autowired
    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    /**
     * Creates a new lead from the provided request data.
     * 
     * @param request The lead creation request containing all necessary data
     * @return LeadResponse containing the created lead information
     * @throws DuplicateLeadException if a lead with the same email already exists
     */
    @SuppressWarnings("null")
    public LeadResponse createLead(@NonNull LeadCreateRequest request) {
        // Check for duplicate email
        Optional<Lead> existingLead = leadRepository.findByEmail(request.getEmail());
        if (existingLead.isPresent()) {
            throw new DuplicateLeadException("Lead with email " + request.getEmail() + " already exists");
        }

        // Create new lead entity
        Lead lead = new Lead();
        lead.setFirstName(request.getFirstName());
        lead.setLastName(request.getLastName());
        lead.setEmail(request.getEmail());
        lead.setPhone(request.getPhone());
        lead.setCompanyName(request.getCompanyName());
        lead.setJobTitle(request.getJobTitle());
        lead.setCompanySize(request.getCompanySize());
        lead.setIndustry(request.getIndustry());
        lead.setServiceInterest(request.getServiceInterest());
        lead.setBudgetRange(request.getBudgetRange());
        lead.setTimeline(request.getTimeline());
        lead.setMessage(request.getMessage());
        lead.setSource(request.getSource());
        lead.setCreatedAt(LocalDateTime.now());
        lead.setUpdatedAt(LocalDateTime.now());

        // Set priority based on budget and company size
        lead.setPriority(determineLeadPriority(request));

        // Save the lead
        Lead savedLead = Objects.requireNonNull(leadRepository.save(lead), "Saved lead cannot be null");

        // Convert to response DTO
        return convertToLeadResponse(savedLead);
    }

    /**
     * Retrieves a lead by its unique identifier.
     * 
     * @param id The unique identifier of the lead
     * @return LeadResponse containing the lead information
     * @throws LeadNotFoundException if no lead with the given ID is found
     */
    @Transactional(readOnly = true)
    @SuppressWarnings("null")
    public LeadResponse getLeadById(@NonNull String id) {
        Lead lead = Objects.requireNonNull(
            leadRepository.findById(id)
                .orElseThrow(() -> new LeadNotFoundException("Lead with ID " + id + " not found")),
            "Lead cannot be null"
        );
        return convertToLeadResponse(lead);
    }

    /**
     * Retrieves all leads with pagination support.
     * 
     * @param pageable Pagination information
     * @return Page of LeadResponse objects
     */
    @Transactional(readOnly = true)
    @SuppressWarnings("null")
    public Page<LeadResponse> getAllLeads(@NonNull Pageable pageable) {
        return Objects.requireNonNull(
            leadRepository.findAll(pageable)
                .map(this::convertToLeadResponse),
            "Page result cannot be null"
        );
    }

    /**
     * Retrieves leads by status with pagination.
     * 
     * @param status The lead status to filter by
     * @param pageable Pagination information
     * @return Page of LeadResponse objects with the specified status
     */
    @Transactional(readOnly = true)
    @SuppressWarnings("null")
    public Page<LeadResponse> getLeadsByStatus(@NonNull Lead.LeadStatus status, @NonNull Pageable pageable) {
        List<Lead> leads = Objects.requireNonNull(leadRepository.findByStatus(status), "Leads list cannot be null");
        return convertToLeadResponsePage(leads, pageable);
    }

    /**
     * Retrieves leads by priority level with pagination.
     * 
     * @param priority The priority level to filter by
     * @param pageable Pagination information
     * @return Page of LeadResponse objects with the specified priority
     */
    @Transactional(readOnly = true)
    @SuppressWarnings("null")
    public Page<LeadResponse> getLeadsByPriority(@NonNull Lead.LeadPriority priority, @NonNull Pageable pageable) {
        List<Lead> leads = Objects.requireNonNull(leadRepository.findByPriority(priority), "Leads list cannot be null");
        return convertToLeadResponsePage(leads, pageable);
    }

    /**
     * Retrieves leads by industry.
     * 
     * @param industry The industry to filter by
     * @param pageable Pagination information
     * @return Page of LeadResponse objects from the specified industry
     */
    @Transactional(readOnly = true)
    @SuppressWarnings("null")
    public Page<LeadResponse> getLeadsByIndustry(@NonNull String industry, @NonNull Pageable pageable) {
        List<Lead> leads = Objects.requireNonNull(leadRepository.findByIndustry(industry), "Leads list cannot be null");
        return convertToLeadResponsePage(leads, pageable);
    }

    /**
     * Searches leads by company name or contact name.
     * 
     * @param searchTerm The search term
     * @param pageable Pagination information
     * @return Page of LeadResponse objects matching the search criteria
     */
    @Transactional(readOnly = true)
    @SuppressWarnings("null")
    public Page<LeadResponse> searchLeads(@NonNull String searchTerm, @NonNull Pageable pageable) {
        List<Lead> searchResults = Objects.requireNonNull(
            leadRepository.searchByCompanyOrContactName(searchTerm),
            "Search results cannot be null"
        );
        return convertToLeadResponsePage(searchResults, pageable);
    }

    /**
     * Updates an existing lead's status.
     * 
     * @param id The lead ID
     * @param status The new status to set
     * @return LeadResponse containing the updated lead information
     * @throws LeadNotFoundException if no lead with the given ID is found
     */
    @SuppressWarnings("null")
    public LeadResponse updateLeadStatus(@NonNull String id, Lead.LeadStatus status) {
        Lead lead = Objects.requireNonNull(
            leadRepository.findById(id)
                .orElseThrow(() -> new LeadNotFoundException("Lead with ID " + id + " not found")),
            "Lead cannot be null"
        );

        lead.setStatus(status);
        lead.setUpdatedAt(LocalDateTime.now());

        Lead updatedLead = Objects.requireNonNull(leadRepository.save(lead), "Updated lead cannot be null");
        return convertToLeadResponse(updatedLead);
    }

    /**
     * Assigns a lead to a specific user.
     * 
     * @param id The lead ID
     * @param assignedTo The user ID to assign the lead to
     * @return LeadResponse containing the updated lead information
     * @throws LeadNotFoundException if no lead with the given ID is found
     */
    @SuppressWarnings("null")
    public LeadResponse assignLead(@NonNull String id, String assignedTo) {
        Lead lead = Objects.requireNonNull(
            leadRepository.findById(id)
                .orElseThrow(() -> new LeadNotFoundException("Lead with ID " + id + " not found")),
            "Lead cannot be null"
        );

        lead.setAssignedTo(assignedTo);
        lead.setUpdatedAt(LocalDateTime.now());

        Lead updatedLead = Objects.requireNonNull(leadRepository.save(lead), "Updated lead cannot be null");
        return convertToLeadResponse(updatedLead);
    }

    /**
     * Updates lead priority.
     * 
     * @param id The lead ID
     * @param priority The new priority level
     * @return LeadResponse containing the updated lead information
     * @throws LeadNotFoundException if no lead with the given ID is found
     */
    @SuppressWarnings("null")
    public LeadResponse updateLeadPriority(@NonNull String id, Lead.LeadPriority priority) {
        Lead lead = Objects.requireNonNull(
            leadRepository.findById(id)
                .orElseThrow(() -> new LeadNotFoundException("Lead with ID " + id + " not found")),
            "Lead cannot be null"
        );

        lead.setPriority(priority);
        lead.setUpdatedAt(LocalDateTime.now());

        Lead updatedLead = Objects.requireNonNull(leadRepository.save(lead), "Updated lead cannot be null");
        return convertToLeadResponse(updatedLead);
    }

    /**
     * Deletes a lead by its ID.
     * 
     * @param id The lead ID to delete
     * @throws LeadNotFoundException if no lead with the given ID is found
     */
    public void deleteLead(@NonNull String id) {
        if (!leadRepository.existsById(id)) {
            throw new LeadNotFoundException("Lead with ID " + id + " not found");
        }
        leadRepository.deleteById(id);
    }

    /**
     * Retrieves lead statistics for dashboard reporting.
     * 
     * @return LeadStatistics object containing various lead metrics
     */
    @Transactional(readOnly = true)
    public LeadStatistics getLeadStatistics() {
        LeadStatistics stats = new LeadStatistics();
        
        stats.setTotalLeads(leadRepository.count());
        stats.setNewLeads(leadRepository.countByStatus(Lead.LeadStatus.NEW));
        stats.setQualifiedLeads(leadRepository.countByStatus(Lead.LeadStatus.QUALIFIED));
        stats.setClosedWonLeads(leadRepository.countByStatus(Lead.LeadStatus.CLOSED_WON));
        stats.setHighPriorityLeads(leadRepository.countByPriority(Lead.LeadPriority.HIGH));
        stats.setUrgentLeads(leadRepository.countByPriority(Lead.LeadPriority.URGENT));
        
        return stats;
    }

    /**
     * Determines lead priority based on budget and company size.
     * 
     * @param request The lead creation request
     * @return The determined priority level
     */
    private Lead.LeadPriority determineLeadPriority(LeadCreateRequest request) {
        String budget = request.getBudgetRange();
        String companySize = request.getCompanySize();
        
        // High priority for large budgets and enterprise companies
        if ((budget != null && (budget.equals("250k-500k") || budget.equals("500k+"))) ||
            (companySize != null && (companySize.equals("1001-5000") || companySize.equals("5000+")))) {
            return Lead.LeadPriority.HIGH;
        }
        
        // Urgent priority for very large budgets
        if (budget != null && budget.equals("500k+")) {
            return Lead.LeadPriority.URGENT;
        }
        
        // Low priority for small budgets and companies
        if ((budget != null && budget.equals("10k-25k")) ||
            (companySize != null && companySize.equals("1-10"))) {
            return Lead.LeadPriority.LOW;
        }
        
        return Lead.LeadPriority.MEDIUM;
    }

    /**
     * Converts a Lead entity to LeadResponse DTO.
     * 
     * @param lead The lead entity to convert
     * @return LeadResponse DTO
     */
    private LeadResponse convertToLeadResponse(@NonNull Lead lead) {
        LeadResponse response = new LeadResponse();
        response.setId(lead.getId());
        response.setFirstName(lead.getFirstName());
        response.setLastName(lead.getLastName());
        response.setEmail(lead.getEmail());
        response.setPhone(lead.getPhone());
        response.setCompanyName(lead.getCompanyName());
        response.setJobTitle(lead.getJobTitle());
        response.setCompanySize(lead.getCompanySize());
        response.setIndustry(lead.getIndustry());
        response.setServiceInterest(lead.getServiceInterest());
        response.setBudgetRange(lead.getBudgetRange());
        response.setTimeline(lead.getTimeline());
        response.setMessage(lead.getMessage());
        response.setSource(lead.getSource());
        response.setStatus(lead.getStatus() != null ? lead.getStatus().getDisplayName() : null);
        response.setAssignedTo(lead.getAssignedTo());
        response.setPriority(lead.getPriority() != null ? lead.getPriority().getDisplayName() : null);
        response.setTags(lead.getTags());
        response.setCreatedAt(lead.getCreatedAt());
        response.setUpdatedAt(lead.getUpdatedAt());
        
        return response;
    }

    /**
     * Converts a list of Lead entities to a paginated list of LeadResponse DTOs.
     * 
     * @param leads The list of lead entities
     * @param pageable Pagination information
     * @return Page of LeadResponse objects
     */
    @SuppressWarnings("null")
    private Page<LeadResponse> convertToLeadResponsePage(@NonNull List<Lead> leads, @NonNull Pageable pageable) {
        List<LeadResponse> responses = leads.stream()
                .map(this::convertToLeadResponse)
                .collect(Collectors.toList());

        return new org.springframework.data.domain.PageImpl<>(
            Objects.requireNonNull(responses, "Responses list cannot be null"),
            Objects.requireNonNull(pageable, "Pageable cannot be null"),
            leads.size()
        );
    }

    /**
     * Statistics holder class for lead metrics.
     */
    public static class LeadStatistics {
        private long totalLeads;
        private long newLeads;
        private long qualifiedLeads;
        private long closedWonLeads;
        private long highPriorityLeads;
        private long urgentLeads;

        // Getters and Setters
        public long getTotalLeads() { return totalLeads; }
        public void setTotalLeads(long totalLeads) { this.totalLeads = totalLeads; }

        public long getNewLeads() { return newLeads; }
        public void setNewLeads(long newLeads) { this.newLeads = newLeads; }

        public long getQualifiedLeads() { return qualifiedLeads; }
        public void setQualifiedLeads(long qualifiedLeads) { this.qualifiedLeads = qualifiedLeads; }

        public long getClosedWonLeads() { return closedWonLeads; }
        public void setClosedWonLeads(long closedWonLeads) { this.closedWonLeads = closedWonLeads; }

        public long getHighPriorityLeads() { return highPriorityLeads; }
        public void setHighPriorityLeads(long highPriorityLeads) { this.highPriorityLeads = highPriorityLeads; }

        public long getUrgentLeads() { return urgentLeads; }
        public void setUrgentLeads(long urgentLeads) { this.urgentLeads = urgentLeads; }
    }
}
