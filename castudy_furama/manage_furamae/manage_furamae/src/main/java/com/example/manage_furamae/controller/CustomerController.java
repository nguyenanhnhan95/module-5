package com.example.manage_furamae.controller;

import com.example.manage_furamae.model.Customer;
import com.example.manage_furamae.model.Facility;
import com.example.manage_furamae.repository.ITypeCustomerRepository;
import com.example.manage_furamae.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private ITypeCustomerRepository typeCustomerRepository;
    @Autowired
    private ICustomerService customerService;
    @GetMapping()
    public ResponseEntity<Page<Customer>> findAllFacility(Pageable pageable) {
//        System.out.println(size);
//        Pageable pageable = PageRequest.of(page,size);
        if (customerService.getCustomers(pageable).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerService.getCustomers(pageable), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBlog(@PathVariable int id) {
        if (customerService.getCustomer(id) != null) {
            customerService.deleteCustomer(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping()
    public  ResponseEntity<Customer> createFacility(@RequestBody  Customer customer){
//        TypeCustomers typeCustomers=typeCustomerRepository.findById(customer.t)
        if (customerService.getCustomer(customer.getIdCustomer()) == null){
            customerService.saveCustomer(customer);
            return new ResponseEntity<>(customer,HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
    @PatchMapping()
    public  ResponseEntity<Customer> editFacility(@RequestBody  Customer customer){
//        TypeCustomers typeCustomers=typeCustomerRepository.findById(customer.t)
        if (customerService.getCustomer(customer.getIdCustomer()) != null){
            customerService.saveCustomer(customer);
            return new ResponseEntity<>(customer,HttpStatus.CREATED);
        }else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
    @GetMapping("{id}")
    public ResponseEntity<Customer> findGetFacility(@PathVariable int id) {

        if (customerService.getCustomer(id) != null) {

            return new ResponseEntity<>(customerService.getCustomer(id),HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/pages/{page}/{limit}")
    public ResponseEntity<Page<Customer>> getItems(@PathVariable int page,@PathVariable int limit){
        System.out.println(page);
        System.out.println(limit);
        Pageable pageable = PageRequest.of(page, limit);
        if(customerService.getCustomers(pageable).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }else {
            return new ResponseEntity<>(customerService.getCustomers(pageable),HttpStatus.OK);
        }
    }
}
