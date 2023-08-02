package com.example.manage_furamae.repository;

import com.example.manage_furamae.model.Customer;
import com.example.manage_furamae.model.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFacilityRepository extends JpaRepository<Facility,Integer> {

    Page<Facility> findAllByFlagDeleteIsFalse(Pageable pageable);
    Facility getFacilitiesByIdAndFlagDeleteFalse(int id);
}
