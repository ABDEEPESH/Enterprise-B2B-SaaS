package com.enterprise.platform.service;

import com.enterprise.platform.domain.Lead;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    private static final Logger logger = LoggerFactory.getLogger(KafkaConsumerService.class);
    private final ObjectMapper objectMapper;

    @Autowired
    public KafkaConsumerService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @KafkaListener(topics = "lead-created-topic", groupId = "lead-events-group")
    public void handleLeadCreated(@Payload String message, 
                                  @Header(KafkaHeaders.RECEIVED_KEY) String key,
                                  Acknowledgment acknowledgment) {
        try {
            Lead lead = objectMapper.readValue(message, Lead.class);
            logger.info("Lead created event received: ID={}, Name={}", lead.getId(), 
                       lead.getFirstName() + " " + lead.getLastName());
            
            // Process lead created event (e.g., send welcome email, update analytics)
            // Additional business logic can be added here
            
            if (acknowledgment != null) {
                acknowledgment.acknowledge();
            }
        } catch (Exception e) {
            logger.error("Failed to process lead created event", e);
            throw new RuntimeException("Failed to process lead created event", e);
        }
    }

    @KafkaListener(topics = "lead-updated-topic", groupId = "lead-events-group")
    public void handleLeadUpdated(@Payload String message,
                                  @Header(KafkaHeaders.RECEIVED_KEY) String key,
                                  Acknowledgment acknowledgment) {
        try {
            Lead lead = objectMapper.readValue(message, Lead.class);
            logger.info("Lead updated event received: ID={}, Status={}", lead.getId(), lead.getStatus());
            
            // Process lead updated event (e.g., sync with external systems)
            
            if (acknowledgment != null) {
                acknowledgment.acknowledge();
            }
        } catch (Exception e) {
            logger.error("Failed to process lead updated event", e);
            throw new RuntimeException("Failed to process lead updated event", e);
        }
    }

    @KafkaListener(topics = "lead-deleted-topic", groupId = "lead-events-group")
    public void handleLeadDeleted(@Payload String message,
                                  @Header(KafkaHeaders.RECEIVED_KEY) String key,
                                  Acknowledgment acknowledgment) {
        try {
            logger.info("Lead deleted event received: ID={}", key);
            
            // Process lead deleted event (e.g., cleanup related data)
            
            if (acknowledgment != null) {
                acknowledgment.acknowledge();
            }
        } catch (Exception e) {
            logger.error("Failed to process lead deleted event", e);
            throw new RuntimeException("Failed to process lead deleted event", e);
        }
    }

    @KafkaListener(topics = "lead-status-changed-topic", groupId = "lead-events-group")
    public void handleLeadStatusChanged(@Payload String message,
                                         @Header(KafkaHeaders.RECEIVED_KEY) String key,
                                         Acknowledgment acknowledgment) {
        try {
            logger.info("Lead status changed event received: ID={}, Message={}", key, message);
            
            // Process lead status changed event (e.g., trigger notifications, update analytics)
            
            if (acknowledgment != null) {
                acknowledgment.acknowledge();
            }
        } catch (Exception e) {
            logger.error("Failed to process lead status changed event", e);
            throw new RuntimeException("Failed to process lead status changed event", e);
        }
    }
}
