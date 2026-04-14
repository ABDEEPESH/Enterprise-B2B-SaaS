package com.enterprise.platform.exception;

/**
 * Exception thrown when attempting to create a lead that already exists.
 * 
 * This runtime exception is used to indicate that a lead with the same
 * email address or other unique identifier already exists in the system.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
public class DuplicateLeadException extends RuntimeException {

    /**
     * Constructs a new DuplicateLeadException with the specified detail message.
     * 
     * @param message The detail message explaining why the exception occurred
     */
    public DuplicateLeadException(String message) {
        super(message);
    }

    /**
     * Constructs a new DuplicateLeadException with the specified detail message and cause.
     * 
     * @param message The detail message explaining why the exception occurred
     * @param cause The cause of the exception
     */
    public DuplicateLeadException(String message, Throwable cause) {
        super(message, cause);
    }
}
