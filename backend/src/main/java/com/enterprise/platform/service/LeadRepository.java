package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * MongoDB repository interface for Lead entity operations.
 * 
 * This repository provides data access methods for lead management,
 * including custom queries for business intelligence and reporting.
 * It extends MongoRepository for standard CRUD operations.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@Repository
public interface LeadRepository extends MongoRepository<Lead, String> {

    /**
     * Find a lead by email address.
     * 
     * @param email The email address to search for
     * @return Optional containing the lead if found, empty otherwise
     */
    Optional<Lead> findByEmail(String email);

    /**
     * Find leads by company name.
     * 
     * @param companyName The company name to search for
     * @return List of leads from the specified company
     */
    List<Lead> findByCompanyName(String companyName);

    /**
     * Find leads by status.
     * 
     * @param status The lead status to filter by
     * @return List of leads with the specified status
     */
    List<Lead> findByStatus(Lead.LeadStatus status);

    /**
     * Find leads by priority level.
     * 
     * @param priority The priority level to filter by
     * @return List of leads with the specified priority
     */
    List<Lead> findByPriority(Lead.LeadPriority priority);

    /**
     * Find leads by industry.
     * 
     * @param industry The industry to filter by
     * @return List of leads from the specified industry
     */
    List<Lead> findByIndustry(String industry);

    /**
     * Find leads by service interest.
     * 
     * @param serviceInterest The service interest to filter by
     * @return List of leads interested in the specified service
     */
    List<Lead> findByServiceInterest(String serviceInterest);

    /**
     * Find leads created within a date range.
     * 
     * @param startDate Start date of the range
     * @param endDate End date of the range
     * @return List of leads created within the specified date range
     */
    @Query("{ 'createdAt': { $gte: ?0, $lte: ?1 } }")
    List<Lead> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);

    /**
     * Find leads by source.
     * 
     * @param source The lead source to filter by
     * @return List of leads from the specified source
     */
    List<Lead> findBySource(String source);

    /**
     * Find leads assigned to a specific user.
     * 
     * @param assignedTo The user ID to filter by
     * @return List of leads assigned to the specified user
     */
    List<Lead> findByAssignedTo(String assignedTo);

    /**
     * Count leads by status.
     * 
     * @param status The lead status to count
     * @return Number of leads with the specified status
     */
    long countByStatus(Lead.LeadStatus status);

    /**
     * Count leads by priority.
     * 
     * @param priority The priority level to count
     * @return Number of leads with the specified priority
     */
    long countByPriority(Lead.LeadPriority priority);

    /**
     * Count leads by industry.
     * 
     * @param industry The industry to count
     * @return Number of leads from the specified industry
     */
    long countByIndustry(String industry);

    /**
     * Find leads with company size in the specified range.
     * 
     * @param companySize The company size to filter by
     * @return List of leads with the specified company size
     */
    List<Lead> findByCompanySize(String companySize);

    /**
     * Find leads by budget range.
     * 
     * @param budgetRange The budget range to filter by
     * @return List of leads with the specified budget range
     */
    List<Lead> findByBudgetRange(String budgetRange);

    /**
     * Find leads by timeline.
     * 
     * @param timeline The timeline to filter by
     * @return List of leads with the specified timeline
     */
    List<Lead> findByTimeline(String timeline);

    /**
     * Search leads by company name or contact name (case-insensitive).
     * 
     * @param searchTerm The search term
     * @return List of leads matching the search criteria
     */
    @Query("{ $or: [ { 'companyName': { $regex: ?0, $options: 'i' } }, " +
           "{ 'firstName': { $regex: ?0, $options: 'i' } }, " +
           "{ 'lastName': { $regex: ?0, $options: 'i' } } ] }")
    List<Lead> searchByCompanyOrContactName(String searchTerm);

    /**
     * Find leads created after a specific date.
     * 
     * @param date The date to filter from
     * @return List of leads created after the specified date
     */
    List<Lead> findByCreatedAtAfter(LocalDateTime date);

    /**
     * Find leads updated after a specific date.
     * 
     * @param date The date to filter from
     * @return List of leads updated after the specified date
     */
    List<Lead> findByUpdatedAtAfter(LocalDateTime date);
}
