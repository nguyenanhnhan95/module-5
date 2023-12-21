package com.example.test_module6.controller;

import com.example.test_module6.service.CustomerService;
import com.example.test_module6.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @GetMapping("")
    public ResponseEntity<Integer> getDataCustomer(){
        return new ResponseEntity<>(customerService.getA(),HttpStatus.OK);
    }
}
