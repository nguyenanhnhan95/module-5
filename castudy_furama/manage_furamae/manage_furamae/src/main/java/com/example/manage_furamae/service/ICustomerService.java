package com.example.manage_furamae.service;

import com.example.manage_furamae.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService {
    Page<Customer> getCustomers(Pageable pageable);
    Customer getCustomer(int id);
    void deleteCustomer(int id);
    void saveCustomer(Customer customer);
}
