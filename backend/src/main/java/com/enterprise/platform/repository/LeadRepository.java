package com.enterprise.platform.repository;

import com.enterprise.platform.domain.Lead;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface LeadRepository extends MongoRepository<Lead, String> {

    Optional<Lead> findByEmail(String email);
    List<Lead> findByCompanyName(String companyName);
    List<Lead> findByStatus(Lead.LeadStatus status);
    List<Lead> findByPriority(Lead.LeadPriority priority);
    List<Lead> findByIndustry(String industry);
    List<Lead> findByServiceInterest(String serviceInterest);
    
    @Query("{ 'createdAt': { $gte: ?0, $lte: ?1 } }")
    List<Lead> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    List<Lead> findBySource(String source);
    List<Lead> findByAssignedTo(String assignedTo);
    long countByStatus(Lead.LeadStatus status);
    long countByPriority(Lead.LeadPriority priority);
    long countByIndustry(String industry);
    List<Lead> findByCompanySize(String companySize);
    List<Lead> findByBudgetRange(String budgetRange);
    List<Lead> findByTimeline(String timeline);
    
    @Query("{ $or: [ { 'companyName': { $regex: ?0, $options: 'i' } }, " +
           "{ 'firstName': { $regex: ?0, $options: 'i' } }, " +
           "{ 'lastName': { $regex: ?0, $options: 'i' } } ] }")
    List<Lead> searchByCompanyOrContactName(String searchTerm);
    
    List<Lead> findByCreatedAtAfter(LocalDateTime date);
    List<Lead> findByUpdatedAtAfter(LocalDateTime date);
    
    // Tenant-scoped query methods
    List<Lead> findByTenantId(String tenantId);
    List<Lead> findByTenantIdAndStatus(String tenantId, Lead.LeadStatus status);
    List<Lead> findByTenantIdAndPriority(String tenantId, Lead.LeadPriority priority);
    List<Lead> findByTenantIdAndIndustry(String tenantId, String industry);
    long countByTenantId(String tenantId);
    long countByTenantIdAndStatus(String tenantId, Lead.LeadStatus status);
    long countByTenantIdAndPriority(String tenantId, Lead.LeadPriority priority);
}
