package com.enterprise.platform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * Global exception handler for the application.
 * 
 * This class handles exceptions across the entire application, providing
 * consistent error responses in a standardized format. It implements
 * enterprise-grade error handling with proper HTTP status codes.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Handles validation errors for request DTOs.
     * 
     * @param ex The MethodArgumentNotValidException
     * @param request The current web request
     * @return ResponseEntity with validation error details
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationExceptions(
            MethodArgumentNotValidException ex, WebRequest request) {
        
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        ErrorResponse errorResponse = new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.BAD_REQUEST.value(),
            "Validation Failed",
            "Request validation failed. Please check the provided data.",
            errors,
            request.getDescription(false)
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Handles duplicate lead exceptions.
     * 
     * @param ex The DuplicateLeadException
     * @param request The current web request
     * @return ResponseEntity with conflict error details
     */
    @ExceptionHandler(DuplicateLeadException.class)
    public ResponseEntity<ErrorResponse> handleDuplicateLeadException(
            DuplicateLeadException ex, WebRequest request) {
        
        ErrorResponse errorResponse = new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.CONFLICT.value(),
            "Duplicate Lead",
            ex.getMessage(),
            null,
            request.getDescription(false)
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }

    /**
     * Handles lead not found exceptions.
     * 
     * @param ex The LeadNotFoundException
     * @param request The current web request
     * @return ResponseEntity with not found error details
     */
    @ExceptionHandler(LeadNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleLeadNotFoundException(
            LeadNotFoundException ex, WebRequest request) {
        
        ErrorResponse errorResponse = new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.NOT_FOUND.value(),
            "Lead Not Found",
            ex.getMessage(),
            null,
            request.getDescription(false)
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    /**
     * Handles all other exceptions not specifically handled.
     * 
     * @param ex The Exception
     * @param request The current web request
     * @return ResponseEntity with internal server error details
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGlobalException(
            Exception ex, WebRequest request) {
        
        ErrorResponse errorResponse = new ErrorResponse(
            LocalDateTime.now(),
            HttpStatus.INTERNAL_SERVER_ERROR.value(),
            "Internal Server Error",
            "An unexpected error occurred. Please try again later.",
            null,
            request.getDescription(false)
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Standard error response structure for API responses.
     */
    public static class ErrorResponse {
        private LocalDateTime timestamp;
        private int status;
        private String error;
        private String message;
        private Map<String, String> validationErrors;
        private String path;

        /**
         * Default constructor.
         */
        public ErrorResponse() {
        }

        /**
         * Parameterized constructor.
         * 
         * @param timestamp The error timestamp
         * @param status HTTP status code
         * @param error Error type
         * @param message Error message
         * @param validationErrors Validation errors (if any)
         * @param path Request path
         */
        public ErrorResponse(LocalDateTime timestamp, int status, String error, 
                           String message, Map<String, String> validationErrors, String path) {
            this.timestamp = timestamp;
            this.status = status;
            this.error = error;
            this.message = message;
            this.validationErrors = validationErrors;
            this.path = path;
        }

        // Getters and Setters
        public LocalDateTime getTimestamp() { return timestamp; }
        public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

        public int getStatus() { return status; }
        public void setStatus(int status) { this.status = status; }

        public String getError() { return error; }
        public void setError(String error) { this.error = error; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }

        public Map<String, String> getValidationErrors() { return validationErrors; }
        public void setValidationErrors(Map<String, String> validationErrors) { this.validationErrors = validationErrors; }

        public String getPath() { return path; }
        public void setPath(String path) { this.path = path; }
    }
}
