package com.example.manage_furamae.repository;

import com.example.manage_furamae.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    Page<Customer> findAllByByeDeleteIsFalse(Pageable pageable);
    Customer getCustomerByIdCustomerAndByeDeleteFalse(int id);
}
