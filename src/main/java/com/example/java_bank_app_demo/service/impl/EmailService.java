package com.example.java_bank_app_demo.service.impl;

import com.example.java_bank_app_demo.dto.EmailDetails;

public interface EmailService {
    void sendEmailAlert(EmailDetails emailDetails);
}