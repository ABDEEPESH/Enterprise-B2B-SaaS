package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import com.enterprise.platform.dto.LeadResponse;
import com.enterprise.platform.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MobileApiService {

    private final LeadRepository leadRepository;

    @Autowired
    public MobileApiService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public List<LeadResponse> getRecentLeads(int limit) {
        List<Lead> leads = leadRepository.findByCreatedAtAfter(
            java.time.LocalDateTime.now().minusDays(7)
        );
        return leads.stream()
                .limit(limit)
                .map(this::convertToLeadResponse)
                .collect(Collectors.toList());
    }

    public Page<LeadResponse> getLeadsForMobile(Pageable pageable) {
        return leadRepository.findAll(pageable)
                .map(this::convertToLeadResponse);
    }

    public long getLeadCount() {
        return leadRepository.count();
    }

    public long getNewLeadsCount() {
        return leadRepository.countByStatus(Lead.LeadStatus.NEW);
    }

    private LeadResponse convertToLeadResponse(Lead lead) {
        LeadResponse response = new LeadResponse();
        response.setId(lead.getId());
        response.setFirstName(lead.getFirstName());
        response.setLastName(lead.getLastName());
        response.setEmail(lead.getEmail());
        response.setPhone(lead.getPhone());
        response.setCompanyName(lead.getCompanyName());
        response.setStatus(lead.getStatus() != null ? lead.getStatus().getDisplayName() : null);
        response.setPriority(lead.getPriority() != null ? lead.getPriority().getDisplayName() : null);
        response.setCreatedAt(lead.getCreatedAt());
        return response;
    }
}
