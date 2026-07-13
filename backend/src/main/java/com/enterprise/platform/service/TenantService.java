package com.enterprise.platform.service;

import com.enterprise.platform.domain.Tenant;
import com.enterprise.platform.dto.TenantCreateRequest;
import com.enterprise.platform.dto.TenantResponse;
import com.enterprise.platform.exception.TenantAlreadyExistsException;
import com.enterprise.platform.repository.TenantRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TenantService {

    private final TenantRepository tenantRepository;

    public TenantService(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }

    public TenantResponse createTenant(TenantCreateRequest request) {
        if (tenantRepository.existsBySlug(request.getSlug())) {
            throw new TenantAlreadyExistsException("Tenant with slug " + request.getSlug() + " already exists");
        }

        if (request.getDomain() != null && tenantRepository.existsByDomain(request.getDomain())) {
            throw new TenantAlreadyExistsException("Tenant with domain " + request.getDomain() + " already exists");
        }

        Tenant tenant = new Tenant();
        tenant.setName(request.getName());
        tenant.setSlug(request.getSlug());
        tenant.setDomain(request.getDomain());
        tenant.setContactEmail(request.getContactEmail());
        tenant.setContactPhone(request.getContactPhone());
        tenant.setBillingAddress(request.getBillingAddress());
        
        if (request.getPlan() != null) {
            tenant.setPlan(request.getPlan());
            tenant.setMaxUsers(request.getPlan().getMaxUsers());
            tenant.setMaxLeads(request.getPlan().getMaxLeads());
        }

        tenant.setTrialEndDate(LocalDateTime.now().plusDays(30));

        Tenant savedTenant = tenantRepository.save(tenant);
        return new TenantResponse(savedTenant);
    }

    public TenantResponse getTenantById(String id) {
        Tenant tenant = tenantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tenant not found with ID: " + id));
        return new TenantResponse(tenant);
    }

    public TenantResponse getTenantBySlug(String slug) {
        Tenant tenant = tenantRepository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Tenant not found with slug: " + slug));
        return new TenantResponse(tenant);
    }

    public List<TenantResponse> getAllTenants() {
        return tenantRepository.findAll().stream()
                .map(TenantResponse::new)
                .collect(Collectors.toList());
    }

    public TenantResponse updateTenant(String id, TenantCreateRequest request) {
        Tenant tenant = tenantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tenant not found with ID: " + id));

        tenant.setName(request.getName());
        tenant.setContactEmail(request.getContactEmail());
        tenant.setContactPhone(request.getContactPhone());
        tenant.setBillingAddress(request.getBillingAddress());

        if (request.getPlan() != null) {
            tenant.setPlan(request.getPlan());
            tenant.setMaxUsers(request.getPlan().getMaxUsers());
            tenant.setMaxLeads(request.getPlan().getMaxLeads());
        }

        Tenant updatedTenant = tenantRepository.save(tenant);
        return new TenantResponse(updatedTenant);
    }

    public void deleteTenant(String id) {
        if (!tenantRepository.existsById(id)) {
            throw new RuntimeException("Tenant not found with ID: " + id);
        }
        tenantRepository.deleteById(id);
    }
}
