package com.enterprise.platform;

import io.github.cdimascio.dotenv.Dotenv;
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
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║  Enterprise B2B SaaS Platform - Startup                    ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        
        // Load .env file before Spring Boot starts
        Dotenv dotenv = Dotenv.configure()
                .ignoreIfMissing()
                .load();
        
        int envCount = dotenv.entries().size();
        System.out.println("📁 Loaded .env file: " + envCount + " variables");

        // Set system properties from .env for Spring to pick up
        dotenv.entries().forEach(entry -> {
            if (System.getProperty(entry.getKey()) == null) {
                System.setProperty(entry.getKey(), entry.getValue());
            }
        });

        // Verify MongoDB URI source
        String mongoUri = System.getProperty("SPRING_DATA_MONGODB_URI");
        String mongoEnv = System.getenv("SPRING_DATA_MONGODB_URI");
        
        System.out.println("🔍 MongoDB URI Source Check:");
        System.out.println("   - System Property (from .env): " + (mongoUri != null ? "SET" : "NOT SET"));
        System.out.println("   - Environment Variable: " + (mongoEnv != null ? "SET" : "NOT SET"));
        
        if (mongoUri == null && mongoEnv == null) {
            System.err.println("⚠️  WARNING: SPRING_DATA_MONGODB_URI is not configured!");
            System.err.println("   The application will use fallback localhost:27017");
        }

        SpringApplication.run(B2bSaasPlatformApplication.class, args);
    }
}
