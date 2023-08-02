package com.example.manage_furamae.repository;

import com.example.manage_furamae.model.TypeCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeCustomerRepository extends JpaRepository<TypeCustomer,Integer> {
}
