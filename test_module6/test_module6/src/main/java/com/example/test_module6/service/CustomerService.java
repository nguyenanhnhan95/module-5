package com.example.test_module6.service;

import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    private final Integer a=5;
    @Override
    public String getData() {
        return null;
    }

    public Integer getA() {
        return a;
    }
}
