package com.enterprise.platform.controller;

import com.enterprise.platform.domain.CollaborationEvent;
import com.enterprise.platform.security.TenantContext;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class CollaborationController {

    @MessageMapping("/collaborate")
    @SendTo("/topic/collaboration")
    public CollaborationEvent handleCollaboration(CollaborationEvent event) {
        String tenantId = TenantContext.getTenantId();
        if (tenantId != null) {
            event.setTenantId(tenantId);
        }
        return event;
    }
}
