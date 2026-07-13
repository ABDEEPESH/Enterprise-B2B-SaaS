package com.enterprise.platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;

/**
 * Main Spring Boot application class for the Enterprise B2B SaaS Platform.
 *
 * This class serves as the entry point for the Spring Boot application and
 * enables MongoDB auditing capabilities for automatic timestamp management.
 *
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@SpringBootApplication
@EnableMongoAuditing
public class B2bSaasPlatformApplication {

    /**
     * Main method that starts the Spring Boot application.
     *
     * @param args Command line arguments passed to the application
     */
    public static void main(String[] args) {
        System.out.println(" Enterprise B2B SaaS Platform - Startup                    ");
        
        // Set MongoDB URI directly if not already set
        String mongoUri = System.getProperty("SPRING_DATA_MONGODB_URI");
        String mongoEnv = System.getenv("SPRING_DATA_MONGODB_URI");
        
        if (mongoUri == null && mongoEnv != null) {
            System.setProperty("SPRING_DATA_MONGODB_URI", mongoEnv);
            mongoUri = mongoEnv;
        }
        
        System.out.println(" MongoDB URI Source:");
        System.out.println("   - Environment Variable: " + (mongoEnv != null ? "SET" : "NOT SET"));
        System.out.println("   - System Property: " + (mongoUri != null ? "SET" : "NOT SET"));
        
        if (mongoUri == null) {
            System.err.println(" WARNING: SPRING_DATA_MONGODB_URI is not configured!");
            System.err.println("   Using fallback: localhost:27017");
        }

        SpringApplication.run(B2bSaasPlatformApplication.class, args);
    }
}
