package com.example.manage_furamae.service;

import com.example.manage_furamae.model.Customer;
import com.example.manage_furamae.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository customerRepository;
    @Override
    public Page<Customer> getCustomers(Pageable pageable) {
        return customerRepository.findAllByByeDeleteIsFalse(pageable);
    }

    @Override
    public Customer getCustomer(int id) {
        return customerRepository.getCustomerByIdCustomerAndByeDeleteFalse(id);
    }

    @Override
    public void deleteCustomer(int id) {
        Customer customer = customerRepository.getCustomerByIdCustomerAndByeDeleteFalse(id);
        customer.setByeDelete(true);
        customerRepository.save(customer);
    }

    @Override
    public void saveCustomer(Customer customer) {
        customerRepository.save(customer);
    }
}
