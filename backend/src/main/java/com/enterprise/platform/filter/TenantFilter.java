package com.enterprise.platform.filter;

import com.enterprise.platform.security.TenantContext;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class TenantFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {
        
        try {
            String tenantId = extractTenantId(request);
            if (tenantId != null) {
                TenantContext.setTenantId(tenantId);
            }
            filterChain.doFilter(request, response);
        } finally {
            TenantContext.clear();
        }
    }

    private String extractTenantId(HttpServletRequest request) {
        String tenantId = request.getHeader("X-Tenant-ID");
        if (tenantId != null && !tenantId.isEmpty()) {
            return tenantId;
        }

        String subdomain = extractSubdomain(request.getServerName());
        if (subdomain != null && !subdomain.isEmpty()) {
            return subdomain;
        }

        return null;
    }

    private String extractSubdomain(String host) {
        if (host == null || host.isEmpty()) {
            return null;
        }

        String[] parts = host.split("\\.");
        if (parts.length >= 3) {
            return parts[0];
        }

        return null;
    }
}
