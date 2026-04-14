package com.enterprise.platform.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

/**
 * Spring Security configuration for the enterprise B2B SaaS platform.
 * 
 * This configuration provides comprehensive security settings including:
 * - CORS configuration for frontend integration
 * - JWT-based authentication (prepared for future implementation)
 * - Public endpoints for lead capture
 * - Role-based access control structure
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final String[] PUBLIC_ENDPOINTS = {
        "/api/v1/leads/**",
        "/api/v1/health/**",
        "/actuator/health",
        "/actuator/info",
        "/swagger-ui/**",
        "/v3/api-docs/**"
    };

    private static final String[] ADMIN_ENDPOINTS = {
        "/api/v1/admin/**",
        "/actuator/**"
    };

    /**
     * Configures the main security filter chain.
     * 
     * @param http HttpSecurity configuration builder
     * @return Configured SecurityFilterChain
     * @throws Exception if configuration fails
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF for stateless API
            .csrf(AbstractHttpConfigurer::disable)
            
            // Configure CORS
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // Configure session management to be stateless
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            
            // Configure authorization rules
            .authorizeHttpRequests(authz -> authz
                // Public endpoints - no authentication required
                .requestMatchers(PUBLIC_ENDPOINTS).permitAll()
                
                // Admin endpoints - require ADMIN role
                .requestMatchers(ADMIN_ENDPOINTS).hasRole("ADMIN")
                
                // All other endpoints require authentication
                .anyRequest().authenticated()
            )
            
            // Configure exception handling
            .exceptionHandling(exceptions -> 
                exceptions.authenticationEntryPoint(
                    (request, response, authException) -> {
                        response.setStatus(401);
                        response.setContentType("application/json");
                        response.getWriter().write("""
                            {
                                "timestamp": "%s",
                                "status": 401,
                                "error": "Unauthorized",
                                "message": "Authentication is required to access this resource",
                                "path": "%s"
                            }
                            """.formatted(
                                java.time.LocalDateTime.now(),
                                request.getRequestURI()
                            )
                        );
                    }
                )
            );

        return http.build();
    }

    /**
     * Configures CORS settings for the application.
     * 
     * @return CorsConfigurationSource with allowed origins, methods, and headers
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        
        // Allowed origins - configure for your specific frontend domains
        configuration.setAllowedOrigins(Arrays.asList(
            "https://your-vercel-domain.vercel.app",
            "https://localhost:3000",
            "https://localhost:5173",
            "http://localhost:3000",
            "http://localhost:5173"
        ));
        
        // Allowed HTTP methods
        configuration.setAllowedMethods(Arrays.asList(
            "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"
        ));
        
        // Allowed headers - permit all for development
        configuration.setAllowedHeaders(Arrays.asList("*"));
        
        // Allow credentials
        configuration.setAllowCredentials(true);
        
        // Exposed headers
        configuration.setExposedHeaders(Arrays.asList(
            "X-Total-Count",
            "X-Page-Count"
        ));
        
        // Max age for preflight requests
        configuration.setMaxAge(3600L);
        
        // Register the configuration for all endpoints
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        
        return source;
    }

    /**
     * Configures password encoder for authentication.
     * 
     * @return BCryptPasswordEncoder instance
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    /**
     * JWT filter bean for future JWT authentication implementation.
     * This is prepared for when JWT authentication is added.
     * 
     * @return JwtAuthenticationFilter (placeholder)
     */
    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }

    /**
     * Placeholder JWT authentication filter for future implementation.
     * This class will be expanded when JWT authentication is fully implemented.
     */
    public static class JwtAuthenticationFilter extends 
            org.springframework.web.filter.OncePerRequestFilter {
        
        @Override
        protected void doFilterInternal(
                @NonNull jakarta.servlet.http.HttpServletRequest request,
                @NonNull jakarta.servlet.http.HttpServletResponse response,
                @NonNull jakarta.servlet.FilterChain filterChain) 
                throws jakarta.servlet.ServletException, java.io.IOException {
            
            // JWT validation logic will be implemented here
            // For now, we just continue the filter chain
            
            filterChain.doFilter(request, response);
        }
    }
}
