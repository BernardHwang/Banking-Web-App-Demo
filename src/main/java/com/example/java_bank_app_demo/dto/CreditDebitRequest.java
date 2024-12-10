package com.example.java_bank_app_demo.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreditDebitRequest {
    private String accountNumber;
    private BigDecimal amount;
}
