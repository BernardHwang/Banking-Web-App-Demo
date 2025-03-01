package com.example.java_bank_app_demo.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountInfo {
    private String accountName;
    private String accountNumber;
    private BigDecimal accountBalance;
    private UserRequest userRequest;
}
