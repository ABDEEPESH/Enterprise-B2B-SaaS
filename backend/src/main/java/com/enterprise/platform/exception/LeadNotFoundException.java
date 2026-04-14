package com.enterprise.platform.exception;

/**
 * Exception thrown when a lead is not found in the system.
 * 
 * This runtime exception is used to indicate that a requested lead
 * cannot be found with the provided identifier.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
public class LeadNotFoundException extends RuntimeException {

    /**
     * Constructs a new LeadNotFoundException with the specified detail message.
     * 
     * @param message The detail message explaining why the exception occurred
     */
    public LeadNotFoundException(String message) {
        super(message);
    }

    /**
     * Constructs a new LeadNotFoundException with the specified detail message and cause.
     * 
     * @param message The detail message explaining why the exception occurred
     * @param cause The cause of the exception
     */
    public LeadNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
