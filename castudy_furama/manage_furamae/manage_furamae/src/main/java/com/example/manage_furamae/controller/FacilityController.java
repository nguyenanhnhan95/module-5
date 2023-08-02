package com.example.manage_furamae.controller;


import com.example.manage_furamae.model.Facility;
import com.example.manage_furamae.service.IFacilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/facilities")
public class FacilityController {
    @Autowired
    private IFacilityService facilityService;
    @GetMapping
    public ResponseEntity<Page<Facility>> findAllFacility(Pageable pageable) {
        if (facilityService.getFacilities(pageable).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(facilityService.getFacilities(pageable), HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<?> findGetFacility(@PathVariable int id) {
        if (facilityService.findByIdFacility(id) != null) {

            return new ResponseEntity<>(facilityService.findByIdFacility(id),HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping()
    public  ResponseEntity<Facility> createFacility(@RequestBody   Facility facility){
        if (facilityService.findByIdFacility(facility.getId()) == null){
            facilityService.saveFacility(facility);
            return new ResponseEntity<>(facility,HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
    @PatchMapping("{id}")
    public  ResponseEntity<Facility> editFacility(@PathVariable int id,@RequestBody Facility facility){

        if (facilityService.findByIdFacility(id)!=null){

            facilityService.saveFacility(facility);
            return new ResponseEntity<>(facility,HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBlog(@PathVariable int id) {
        if (facilityService.findByIdFacility(id)!= null) {
            facilityService.deleteFacility(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
