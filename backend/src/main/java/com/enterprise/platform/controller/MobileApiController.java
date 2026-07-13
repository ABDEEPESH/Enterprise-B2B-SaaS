package com.enterprise.platform.controller;

import com.enterprise.platform.dto.LeadResponse;
import com.enterprise.platform.service.MobileApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mobile")
public class MobileApiController {

    private final MobileApiService mobileApiService;

    @Autowired
    public MobileApiController(MobileApiService mobileApiService) {
        this.mobileApiService = mobileApiService;
    }

    @GetMapping("/leads/recent")
    public List<LeadResponse> getRecentLeads(@RequestParam(defaultValue = "10") int limit) {
        return mobileApiService.getRecentLeads(limit);
    }

    @GetMapping("/leads")
    public Page<LeadResponse> getLeads(Pageable pageable) {
        return mobileApiService.getLeadsForMobile(pageable);
    }

    @GetMapping("/stats")
    public MobileStats getStats() {
        MobileStats stats = new MobileStats();
        stats.setTotalLeads(mobileApiService.getLeadCount());
        stats.setNewLeads(mobileApiService.getNewLeadsCount());
        return stats;
    }

    public static class MobileStats {
        private long totalLeads;
        private long newLeads;

        public long getTotalLeads() { return totalLeads; }
        public void setTotalLeads(long totalLeads) { this.totalLeads = totalLeads; }

        public long getNewLeads() { return newLeads; }
        public void setNewLeads(long newLeads) { this.newLeads = newLeads; }
    }
}
