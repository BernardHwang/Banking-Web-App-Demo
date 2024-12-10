package com.example.java_bank_app_demo.service.impl;

import com.example.java_bank_app_demo.dto.BankResponse;
import com.example.java_bank_app_demo.dto.EnquiryRequest;
import com.example.java_bank_app_demo.dto.TransferRequest;
import com.example.java_bank_app_demo.dto.UserRequest;
import com.example.java_bank_app_demo.dto.CreditDebitRequest;

public interface UserService {
    BankResponse createAccount(UserRequest userRequest);
    BankResponse loginAccount(UserRequest userRequest);
    BankResponse balanceEnquiry(EnquiryRequest request);
    String nameEnquiry(EnquiryRequest request);
    BankResponse creditAccount(CreditDebitRequest request);
    BankResponse debitAccount(CreditDebitRequest request);
    BankResponse transfer(TransferRequest request);
}
