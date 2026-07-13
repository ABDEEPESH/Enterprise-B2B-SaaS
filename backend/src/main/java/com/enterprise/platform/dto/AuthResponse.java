package com.enterprise.platform.dto;

/**
 * DTO for authentication response containing JWT token and user data.
 * 
 * @author Enterprise Platform Team
 * @version 1.0.0
 * @since 2024-04-14
 */
public class AuthResponse {

    private String token;
    private String tokenType;
    private Long expiresIn;
    private UserResponse user;

    public AuthResponse() {
        this.tokenType = "Bearer";
        this.expiresIn = 3600L; // 1 hour
    }

    public AuthResponse(String token, UserResponse user) {
        this();
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public Long getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
    }

    public UserResponse getUser() {
        return user;
    }

    public void setUser(UserResponse user) {
        this.user = user;
    }
}
