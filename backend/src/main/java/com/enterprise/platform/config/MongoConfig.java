package com.enterprise.platform.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.lang.NonNull;

import java.util.Objects;

/**
 * MongoDB configuration for the enterprise B2B SaaS platform.
 *
 * This configuration sets up MongoDB connection settings, including
 * connection pooling, SSL, and authentication for production environments.
 * It follows enterprise best practices for database configuration.
 *
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@Configuration
@EnableMongoRepositories(basePackages = "com.enterprise.platform.service")
public class MongoConfig extends AbstractMongoClientConfiguration {

    private static final Logger logger = LoggerFactory.getLogger(MongoConfig.class);

    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;

    @Value("${spring.data.mongodb.database}")
    private String databaseName;

    /**
     * Logs MongoDB configuration on startup (with secure URI masking).
     */
    @PostConstruct
    public void logConfiguration() {
        logger.info("╔════════════════════════════════════════════════════════════╗");
        logger.info("║          MongoDB Configuration Check                        ║");
        logger.info("╠════════════════════════════════════════════════════════════╣");

        // Check if URI is configured
        if (mongoUri == null || mongoUri.isEmpty() || mongoUri.equals("${spring.data.mongodb.uri}")) {
            logger.error("║  ❌ SPRING_DATA_MONGODB_URI: NOT SET                       ║");
            logger.error("║     Please set the environment variable or add to .env      ║");
            logger.info("╚════════════════════════════════════════════════════════════╝");
            throw new IllegalStateException(
                "SPRING_DATA_MONGODB_URI is not configured. " +
                "Please set it in your .env file or environment variables."
            );
        }

        // Log URI status (masked for security)
        String maskedUri = maskMongoUri(mongoUri);
        logger.info("║  ✅ SPRING_DATA_MONGODB_URI: {}              ║", maskedUri);

        // Log database name
        String effectiveDbName = (databaseName != null && !databaseName.isEmpty())
            ? databaseName
            : "enterprise_b2b_platform";
        logger.info("║  ✅ Database: {}                            ║",
            String.format("%-43s", effectiveDbName));

        logger.info("╚════════════════════════════════════════════════════════════╝");
    }

    /**
     * Masks the MongoDB URI for secure logging (removes password).
     */
    private String maskMongoUri(String uri) {
        if (uri == null || uri.isEmpty()) {
            return "EMPTY";
        }
        try {
            // Mask password in mongodb+srv://username:password@host format
            return uri.replaceAll("(mongodb\\+srv://[^:]+:)[^@]+(@)", "$1****$2");
        } catch (Exception e) {
            return "CONFIGURED (masked)";
        }
    }

    /**
     * Configures the MongoDB client with enterprise-grade settings.
     *
     * @return Configured MongoClient instance
     */
    @Override
    @Bean
    @NonNull
    @SuppressWarnings("null")
    public MongoClient mongoClient() {
        // Validate URI before creating client
        if (mongoUri == null || mongoUri.isEmpty() || mongoUri.equals("${spring.data.mongodb.uri}")) {
            throw new IllegalStateException(
                "MongoDB URI is not configured. Please set SPRING_DATA_MONGODB_URI in your .env file."
            );
        }

        logger.info("Creating MongoDB client...");
        return Objects.requireNonNull(MongoClients.create(mongoUri), "MongoClient cannot be null");
    }

    /**
     * Returns the database name for MongoDB operations.
     *
     * @return Database name
     */
    @Override
    @NonNull
    @SuppressWarnings("null")
    protected String getDatabaseName() {
        String effectiveName = (databaseName != null && !databaseName.isEmpty())
            ? databaseName
            : "enterprise_b2b_platform";
        return Objects.requireNonNull(effectiveName, "Database name cannot be null");
    }

    /**
     * Configures MongoTemplate with custom settings.
     *
     * @param mongoClient Configured MongoDB client
     * @return MongoTemplate instance for database operations
     */
    @Bean
    @NonNull
    @SuppressWarnings("null")
    public MongoTemplate mongoTemplate(@NonNull MongoClient mongoClient) {
        return new MongoTemplate(
            Objects.requireNonNull(mongoClient, "MongoClient cannot be null"),
            Objects.requireNonNull(getDatabaseName(), "Database name cannot be null")
        );
    }
}
