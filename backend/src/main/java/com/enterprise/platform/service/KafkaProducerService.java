package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

@Service
public class KafkaProducerService {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    public KafkaProducerService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = new ObjectMapper();
    }

    public void publishLeadCreatedEvent(Lead lead) {
        try {
            String message = objectMapper.writeValueAsString(lead);
            kafkaTemplate.send("lead-created-topic", lead.getId(), message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to publish lead created event", e);
        }
    }

    public void publishLeadUpdatedEvent(Lead lead) {
        try {
            String message = objectMapper.writeValueAsString(lead);
            kafkaTemplate.send("lead-updated-topic", lead.getId(), message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to publish lead updated event", e);
        }
    }

    public void publishLeadDeletedEvent(String leadId) {
        try {
            String message = objectMapper.writeValueAsString(Map.of("leadId", leadId, "deletedAt", LocalDateTime.now()));
            kafkaTemplate.send("lead-deleted-topic", leadId, message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to publish lead deleted event", e);
        }
    }

    public void publishLeadStatusChangedEvent(String leadId, String oldStatus, String newStatus) {
        try {
            String message = objectMapper.writeValueAsString(Map.of(
                "leadId", leadId,
                "oldStatus", oldStatus,
                "newStatus", newStatus,
                "changedAt", LocalDateTime.now()
            ));
            kafkaTemplate.send("lead-status-changed-topic", leadId, message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to publish lead status changed event", e);
        }
    }
}
