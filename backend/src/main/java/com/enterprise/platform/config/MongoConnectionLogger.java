package com.enterprise.platform.config;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

/**
 * MongoDB Connection Logger.
 *
 * Logs clear success/failure messages when connecting to MongoDB cluster.
 * This component ensures visibility into database connectivity on application startup.
 *
 * @author Enterprise Platform Team
 * @since 2024-04-14
 */
@Configuration
public class MongoConnectionLogger {

    private static final Logger logger = LoggerFactory.getLogger(MongoConnectionLogger.class);

    private final MongoTemplate mongoTemplate;

    @Autowired
    public MongoConnectionLogger(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    /**
     * Verifies MongoDB connection on application startup and logs success.
     */
    @PostConstruct
    public void verifyConnection() {
        try {
            // Ping the database to verify connection
            mongoTemplate.executeCommand("{ ping: 1 }");

            // Get database name
            String dbName = mongoTemplate.getDb().getName();

            // Log success message
            logger.info("╔════════════════════════════════════════════════════════════╗");
            logger.info("║          ✅ MONGODB CONNECTION SUCCESSFUL                   ║");
            logger.info("╠════════════════════════════════════════════════════════════╣");
            logger.info("║  Database: {}", String.format("%-43s", dbName) + "║");
            logger.info("║  Status:  {}", String.format("%-43s", "Connected & Operational") + "║");
            logger.info("╚════════════════════════════════════════════════════════════╝");

            // Verify leads collection exists or can be created
            if (!mongoTemplate.collectionExists("leads")) {
                mongoTemplate.createCollection("leads");
                logger.info("📁 Created 'leads' collection in database '{}'", dbName);
            }

        } catch (Exception e) {
            String errorMsg = e.getMessage() != null && e.getMessage().length() > 45 
                ? e.getMessage().substring(0, 45) 
                : e.getMessage();
            logger.error("╔════════════════════════════════════════════════════════════╗");
            logger.error("║          ❌ MONGODB CONNECTION FAILED                       ║");
            logger.error("╠════════════════════════════════════════════════════════════╣");
            logger.error("║  Error: {}", String.format("%-45s", errorMsg) + "║");
            logger.error("╚════════════════════════════════════════════════════════════╝");
            logger.error("Please check your SPRING_DATA_MONGODB_URI environment variable");
        }
    }
}
