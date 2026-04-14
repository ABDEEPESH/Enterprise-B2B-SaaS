package com.enterprise.platform.controller;

import com.enterprise.platform.domain.Lead;
import com.enterprise.platform.dto.ErrorResponse;
import com.enterprise.platform.dto.LeadCreateRequest;
import com.enterprise.platform.dto.LeadResponse;
import com.enterprise.platform.service.LeadService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.lang.NonNull;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for lead management operations.
 * 
 * This controller provides RESTful endpoints for creating, retrieving, updating,
 * and managing leads in the enterprise B2B SaaS platform. It follows REST
 * conventions and includes comprehensive API documentation.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@RestController
@RequestMapping("/api/v1/leads")
@Tag(name = "Lead Management", description = "API endpoints for managing B2B sales leads")
@CrossOrigin(origins = {"https://your-vercel-domain.vercel.app", "http://localhost:3000", "http://localhost:5173"})
public class LeadController {

    private static final Logger logger = LoggerFactory.getLogger(LeadController.class);

    private final LeadService leadService;

    /**
     * Constructor-based dependency injection.
     * 
     * @param leadService The lead service for business logic operations
     */
    @Autowired
    public LeadController(@NonNull LeadService leadService) {
        this.leadService = leadService;
    }

    /**
     * Creates a new lead in the system.
     * 
     * @param leadRequest The lead creation request with all required information
     * @return ResponseEntity containing the created lead information
     */
    @Operation(
        summary = "Create a new lead",
        description = "Creates a new B2B sales lead with the provided information. Validates all required fields and checks for duplicate emails."
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "201",
            description = "Lead successfully created",
            content = @Content(schema = @Schema(implementation = LeadResponse.class))
        ),
        @ApiResponse(
            responseCode = "400",
            description = "Invalid input data"
        ),
        @ApiResponse(
            responseCode = "409",
            description = "Lead with this email already exists"
        )
    })
    @PostMapping
    public ResponseEntity<?> createLead(@Valid @NonNull @RequestBody LeadCreateRequest leadRequest) {
        logger.info("✅ RECEIVED POST REQUEST /api/v1/leads - Email: {}", leadRequest.getEmail());
        
        try {
            LeadResponse createdLead = leadService.createLead(leadRequest);
            logger.info("✅ Lead created successfully - ID: {}, Email: {}", createdLead.getId(), createdLead.getEmail());
            return new ResponseEntity<>(createdLead, HttpStatus.CREATED);
        } catch (org.springframework.dao.DataAccessException e) {
            logger.error("❌ Database error while creating lead: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                .body(new ErrorResponse("Database connection pending. Please try again in a moment."));
        } catch (Exception e) {
            logger.error("❌ Unexpected error while creating lead: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse("Server error. Please try again later."));
        }
    }

    /**
     * Retrieves a lead by its unique identifier.
     * 
     * @param id The unique identifier of the lead
     * @return ResponseEntity containing the lead information
     */
    @Operation(
        summary = "Get lead by ID",
        description = "Retrieves detailed information about a specific lead using its unique identifier."
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Lead found and returned",
            content = @Content(schema = @Schema(implementation = LeadResponse.class))
        ),
        @ApiResponse(
            responseCode = "404",
            description = "Lead not found"
        )
    })
    @GetMapping("/{id}")
    public ResponseEntity<LeadResponse> getLeadById(
            @Parameter(description = "Lead unique identifier")
            @NonNull @PathVariable String id) {
        LeadResponse lead = leadService.getLeadById(id);
        return ResponseEntity.ok(lead);
    }

    /**
     * Retrieves all leads with pagination support.
     * 
     * @param page Page number (default: 0)
     * @param size Page size (default: 20)
     * @param sortBy Field to sort by (default: createdAt)
     * @param sortDirection Sort direction (default: desc)
     * @return ResponseEntity containing paginated list of leads
     */
    @Operation(
        summary = "Get all leads",
        description = "Retrieves a paginated list of all leads in the system. Supports sorting and pagination."
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Leads retrieved successfully",
            content = @Content(schema = @Schema(implementation = Page.class))
        )
    })
    @GetMapping
    public ResponseEntity<Page<LeadResponse>> getAllLeads(
            @Parameter(description = "Page number (0-based)") 
            @RequestParam(defaultValue = "0") int page,
            
            @Parameter(description = "Number of items per page") 
            @RequestParam(defaultValue = "20") int size,
            
            @Parameter(description = "Field to sort by") 
            @RequestParam(defaultValue = "createdAt") String sortBy,
            
            @Parameter(description = "Sort direction (asc/desc)") 
            @RequestParam(defaultValue = "desc") String sortDirection) {
        
        Sort.Direction direction = sortDirection.equalsIgnoreCase("desc") ? 
            Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        
        Page<LeadResponse> leads = leadService.getAllLeads(pageable);
        return ResponseEntity.ok(leads);
    }

    /**
     * Retrieves leads filtered by status.
     * 
     * @param status The lead status to filter by
     * @param page Page number (default: 0)
     * @param size Page size (default: 20)
     * @return ResponseEntity containing paginated list of leads with specified status
     */
    @Operation(
        summary = "Get leads by status",
        description = "Retrieves leads filtered by their current status in the sales pipeline."
    )
    @GetMapping("/status/{status}")
    public ResponseEntity<Page<LeadResponse>> getLeadsByStatus(
            @Parameter(description = "Lead status")
            @NonNull @PathVariable Lead.LeadStatus status,

            @Parameter(description = "Page number (0-based)")
            @RequestParam(defaultValue = "0") int page,

            @Parameter(description = "Number of items per page")
            @RequestParam(defaultValue = "20") int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<LeadResponse> leads = leadService.getLeadsByStatus(status, pageable);
        return ResponseEntity.ok(leads);
    }

    /**
     * Retrieves leads filtered by priority level.
     * 
     * @param priority The priority level to filter by
     * @param page Page number (default: 0)
     * @param size Page size (default: 20)
     * @return ResponseEntity containing paginated list of leads with specified priority
     */
    @Operation(
        summary = "Get leads by priority",
        description = "Retrieves leads filtered by their priority level for sales team focus."
    )
    @GetMapping("/priority/{priority}")
    public ResponseEntity<Page<LeadResponse>> getLeadsByPriority(
            @Parameter(description = "Lead priority level")
            @NonNull @PathVariable Lead.LeadPriority priority,

            @Parameter(description = "Page number (0-based)")
            @RequestParam(defaultValue = "0") int page,

            @Parameter(description = "Number of items per page")
            @RequestParam(defaultValue = "20") int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<LeadResponse> leads = leadService.getLeadsByPriority(priority, pageable);
        return ResponseEntity.ok(leads);
    }

    /**
     * Retrieves leads filtered by industry.
     * 
     * @param industry The industry to filter by
     * @param page Page number (default: 0)
     * @param size Page size (default: 20)
     * @return ResponseEntity containing paginated list of leads from specified industry
     */
    @Operation(
        summary = "Get leads by industry",
        description = "Retrieves leads filtered by their industry sector for targeted marketing analysis."
    )
    @GetMapping("/industry/{industry}")
    public ResponseEntity<Page<LeadResponse>> getLeadsByIndustry(
            @Parameter(description = "Industry sector")
            @NonNull @PathVariable String industry,

            @Parameter(description = "Page number (0-based)")
            @RequestParam(defaultValue = "0") int page,

            @Parameter(description = "Number of items per page")
            @RequestParam(defaultValue = "20") int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<LeadResponse> leads = leadService.getLeadsByIndustry(industry, pageable);
        return ResponseEntity.ok(leads);
    }

    /**
     * Searches leads by company name or contact name.
     * 
     * @param searchTerm The search term to match against company or contact names
     * @param page Page number (default: 0)
     * @param size Page size (default: 20)
     * @return ResponseEntity containing paginated list of matching leads
     */
    @Operation(
        summary = "Search leads",
        description = "Searches leads by company name or contact name (first/last name). Case-insensitive search."
    )
    @GetMapping("/search")
    public ResponseEntity<Page<LeadResponse>> searchLeads(
            @Parameter(description = "Search term for company or contact name")
            @NonNull @RequestParam String searchTerm,

            @Parameter(description = "Page number (0-based)")
            @RequestParam(defaultValue = "0") int page,

            @Parameter(description = "Number of items per page")
            @RequestParam(defaultValue = "20") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<LeadResponse> leads = leadService.searchLeads(searchTerm, pageable);
        return ResponseEntity.ok(leads);
    }

    /**
     * Updates the status of an existing lead.
     * 
     * @param id The lead ID
     * @param status The new status to set
     * @return ResponseEntity containing the updated lead information
     */
    @Operation(
        summary = "Update lead status",
        description = "Updates the status of a lead in the sales pipeline. Used for sales workflow management."
    )
    @PatchMapping("/{id}/status")
    public ResponseEntity<LeadResponse> updateLeadStatus(
            @Parameter(description = "Lead unique identifier")
            @NonNull @PathVariable String id,

            @Parameter(description = "New lead status")
            @NonNull @RequestParam Lead.LeadStatus status) {

        LeadResponse updatedLead = leadService.updateLeadStatus(id, status);
        return ResponseEntity.ok(updatedLead);
    }

    /**
     * Assigns a lead to a specific sales representative.
     * 
     * @param id The lead ID
     * @param assignedTo The user ID of the sales representative
     * @return ResponseEntity containing the updated lead information
     */
    @Operation(
        summary = "Assign lead",
        description = "Assigns a lead to a specific sales representative for follow-up."
    )
    @PatchMapping("/{id}/assign")
    public ResponseEntity<LeadResponse> assignLead(
            @Parameter(description = "Lead unique identifier")
            @NonNull @PathVariable String id,

            @Parameter(description = "User ID of the assignee")
            @NonNull @RequestParam String assignedTo) {

        LeadResponse updatedLead = leadService.assignLead(id, assignedTo);
        return ResponseEntity.ok(updatedLead);
    }

    /**
     * Updates the priority of an existing lead.
     * 
     * @param id The lead ID
     * @param priority The new priority level to set
     * @return ResponseEntity containing the updated lead information
     */
    @Operation(
        summary = "Update lead priority",
        description = "Updates the priority level of a lead for sales team prioritization."
    )
    @PatchMapping("/{id}/priority")
    public ResponseEntity<LeadResponse> updateLeadPriority(
            @Parameter(description = "Lead unique identifier")
            @NonNull @PathVariable String id,

            @Parameter(description = "New priority level")
            @NonNull @RequestParam Lead.LeadPriority priority) {

        LeadResponse updatedLead = leadService.updateLeadPriority(id, priority);
        return ResponseEntity.ok(updatedLead);
    }

    /**
     * Deletes a lead from the system.
     * 
     * @param id The lead ID to delete
     * @return ResponseEntity indicating success
     */
    @Operation(
        summary = "Delete lead",
        description = "Permanently deletes a lead from the system. This action cannot be undone."
    )
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Lead successfully deleted"),
        @ApiResponse(responseCode = "404", description = "Lead not found")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLead(
            @Parameter(description = "Lead unique identifier")
            @NonNull @PathVariable String id) {

        leadService.deleteLead(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Retrieves lead statistics for dashboard reporting.
     * 
     * @return ResponseEntity containing lead statistics
     */
    @Operation(
        summary = "Get lead statistics",
        description = "Retrieves comprehensive lead statistics for dashboard and reporting purposes."
    )
    @GetMapping("/statistics")
    public ResponseEntity<LeadService.LeadStatistics> getLeadStatistics() {
        LeadService.LeadStatistics statistics = leadService.getLeadStatistics();
        return ResponseEntity.ok(statistics);
    }
}
