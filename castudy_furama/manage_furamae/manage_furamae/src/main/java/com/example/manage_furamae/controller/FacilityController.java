package com.example.manage_furamae.controller;


import com.example.manage_furamae.model.Facility;
import com.example.manage_furamae.service.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/facilities")
public class FacilityController {
    @Autowired
    private IFacilityService facilityService;
    @GetMapping
    public ResponseEntity<List<Facility>> findAllBlog() {
        if (facilityService.getFacilities().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(facilityService.getFacilities(), HttpStatus.OK);
    }
}
