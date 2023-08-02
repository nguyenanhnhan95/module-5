package com.example.manage_furamae.service;

import com.example.manage_furamae.model.Customer;
import com.example.manage_furamae.model.Facility;
import com.example.manage_furamae.repository.IFacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FacilityService implements IFacilityService{
    @Autowired
    private  IFacilityRepository facilityRepository;
    @Override
    public Page<Facility> getFacilities(Pageable pageable) {
        return facilityRepository.findAllByFlagDeleteIsFalse(pageable);
    }

    @Override
    public Facility findByIdFacility(int id) {
        return facilityRepository.getFacilitiesByIdAndFlagDeleteFalse(id);
    }

    @Override
    public void saveFacility(Facility facility) {
        facilityRepository.save(facility);
    }

    @Override
    public void deleteFacility(int id) {
        Facility facility = findByIdFacility(id);
        facility.setFlagDelete(true);
        facilityRepository.save(facility);
    }
}
