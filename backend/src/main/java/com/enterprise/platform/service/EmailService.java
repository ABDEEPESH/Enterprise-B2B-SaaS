package com.enterprise.platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import java.util.Map;

@Service
public class EmailService {

    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;

    @Autowired
    public EmailService(JavaMailSender javaMailSender, TemplateEngine templateEngine) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }

    public void sendSimpleEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        javaMailSender.send(message);
    }

    public void sendHtmlEmail(String to, String subject, String templateName, Map<String, Object> variables) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setTo(to);
            helper.setSubject(subject);

            Context context = new Context();
            context.setVariables(variables);

            String htmlContent = templateEngine.process(templateName, context);
            helper.setText(htmlContent, true);

            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email", e);
        }
    }

    public void sendWelcomeEmail(String to, String firstName) {
        Map<String, Object> variables = Map.of(
                "firstName", firstName,
                "email", to
        );
        sendHtmlEmail(to, "Welcome to Enterprise Platform", "welcome-email", variables);
    }

    public void sendPasswordResetEmail(String to, String resetToken) {
        Map<String, Object> variables = Map.of(
                "resetToken", resetToken,
                "email", to
        );
        sendHtmlEmail(to, "Password Reset Request", "password-reset", variables);
    }

    public void sendLeadNotificationEmail(String to, String leadName, String companyName) {
        Map<String, Object> variables = Map.of(
                "leadName", leadName,
                "companyName", companyName
        );
        sendHtmlEmail(to, "New Lead Notification", "lead-notification", variables);
    }
}
