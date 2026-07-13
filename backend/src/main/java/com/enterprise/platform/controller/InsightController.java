package com.enterprise.platform.controller;

import com.enterprise.platform.service.InsightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/insights")
public class InsightController {

    private final InsightService insightService;

    @Autowired
    public InsightController(InsightService insightService) {
        this.insightService = insightService;
    }

    @GetMapping
    public List<InsightService.Insight> getInsights() {
        return insightService.generateLeadInsights();
    }
}
