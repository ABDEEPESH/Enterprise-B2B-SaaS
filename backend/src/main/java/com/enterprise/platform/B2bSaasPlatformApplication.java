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
        // Load .env file before Spring Boot starts
        Dotenv dotenv = Dotenv.configure()
                .ignoreIfMissing()
                .load();

        // Set system properties from .env for Spring to pick up
        dotenv.entries().forEach(entry -> {
            if (System.getProperty(entry.getKey()) == null) {
                System.setProperty(entry.getKey(), entry.getValue());
            }
        });

        SpringApplication.run(B2bSaasPlatformApplication.class, args);
    }
}
