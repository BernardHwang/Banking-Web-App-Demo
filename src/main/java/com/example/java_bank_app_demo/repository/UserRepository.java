package com.example.java_bank_app_demo.repository;

import com.example.java_bank_app_demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
    Boolean existsByEmail(String email);
    Boolean existsByAccountNumber(String accountNumber);
    User findByAccountNumber(String accountNumber);
    User findByEmailAndPhoneNumber(String email, String phoneNumber);
    User findByUsernameAndPassword (String username, String password);
} 