package com.example.manage_furamae.service;

import com.example.manage_furamae.model.Facility;
import com.example.manage_furamae.repository.IFacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FacilityService implements IFacilityService{
    @Autowired
    private  IFacilityRepository facilityRepository;
    @Override
    public List<Facility> getFacilities() {
        return facilityRepository.findAll();
    }
}
