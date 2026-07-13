package com.enterprise.platform.service;

import com.enterprise.platform.domain.User;
import com.enterprise.platform.dto.AuthResponse;
import com.enterprise.platform.dto.UserLoginRequest;
import com.enterprise.platform.dto.UserRegisterRequest;
import com.enterprise.platform.dto.UserResponse;
import com.enterprise.platform.exception.UserAlreadyExistsException;
import com.enterprise.platform.exception.InvalidCredentialsException;
import com.enterprise.platform.exception.AccountLockedException;
import com.enterprise.platform.repository.UserRepository;
import com.enterprise.platform.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse register(UserRegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("User with email " + request.getEmail() + " already exists");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPhone(request.getPhone());
        user.setDepartment(request.getDepartment());
        user.setJobTitle(request.getJobTitle());
        user.setTenantId(request.getTenantId());

        User savedUser = userRepository.save(user);

        String token = jwtService.generateToken(savedUser.getEmail());
        
        return new AuthResponse(token, new UserResponse(savedUser));
    }

    public AuthResponse login(UserLoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password"));

        if (!user.getIsActive()) {
            throw new InvalidCredentialsException("Account is disabled");
        }

        if (user.isAccountLocked()) {
            throw new AccountLockedException("Account is locked until " + user.getLockedUntil());
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            user.incrementFailedLoginAttempts();
            
            if (user.getFailedLoginAttempts() >= 5) {
                user.lockAccount(30);
                userRepository.save(user);
                throw new AccountLockedException("Too many failed attempts. Account locked for 30 minutes");
            }
            
            userRepository.save(user);
            throw new InvalidCredentialsException("Invalid email or password");
        }

        user.resetFailedLoginAttempts();
        user.setLastLoginAt(LocalDateTime.now());
        userRepository.save(user);

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("role", user.getRole().name());
        extraClaims.put("tenantId", user.getTenantId());
        
        String token = jwtService.generateToken(user.getEmail(), extraClaims);
        
        return new AuthResponse(token, new UserResponse(user));
    }

    public UserResponse getCurrentUser(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new InvalidCredentialsException("User not found"));
        return new UserResponse(user);
    }
}
