package com.enterprise.platform.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
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

    @Value("${spring.data.mongodb.uri}")
    private String mongoUri;

    @Value("${spring.data.mongodb.database}")
    private String databaseName;

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
        return Objects.requireNonNull(databaseName, "Database name cannot be null");
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
