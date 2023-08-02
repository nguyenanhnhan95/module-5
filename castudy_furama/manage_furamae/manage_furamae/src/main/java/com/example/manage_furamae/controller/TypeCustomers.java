package com.example.manage_furamae.controller;

import com.example.manage_furamae.model.Customer;
import com.example.manage_furamae.repository.ITypeCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/type-customers")
public class TypeCustomers {
    @Autowired
    private ITypeCustomerRepository typeCustomerRepository;
    @GetMapping()
    public ResponseEntity<?> findAllType() {
        if (typeCustomerRepository.findAll().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeCustomerRepository.findAll(), HttpStatus.OK);
    }
}
