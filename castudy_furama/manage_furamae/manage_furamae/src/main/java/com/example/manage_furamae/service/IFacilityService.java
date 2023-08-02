package com.example.manage_furamae.service;

import com.example.manage_furamae.model.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IFacilityService {
    Page<Facility> getFacilities(Pageable pageable);
    Facility findByIdFacility(int id);
    void saveFacility(Facility facility);
    void deleteFacility(int id);
}
