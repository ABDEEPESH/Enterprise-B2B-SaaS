package com.enterprise.platform.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

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
    public MongoClient mongoClient() {
        return MongoClients.create(mongoUri);
    }

    /**
     * Returns the database name for MongoDB operations.
     * 
     * @return Database name
     */
    @Override
    protected String getDatabaseName() {
        return databaseName;
    }

    /**
     * Configures MongoTemplate with custom settings.
     * 
     * @param mongoClient Configured MongoDB client
     * @return MongoTemplate instance for database operations
     */
    @Bean
    public MongoTemplate mongoTemplate(MongoClient mongoClient) {
        return new MongoTemplate(mongoClient, getDatabaseName());
    }
}
