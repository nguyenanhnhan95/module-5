package com.example.manage_furamae.controller;


import com.example.manage_furamae.model.Contract;
import com.example.manage_furamae.model.Customer;
import com.example.manage_furamae.service.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/contracts")
public class ContractController {
    @Autowired
    private IContractService contractService;

    @GetMapping()
    public ResponseEntity<?> showContracts(Pageable pageable) {
        if (!contractService.findContracts(pageable).isEmpty()) {
            return new ResponseEntity<>(contractService.findContracts(pageable), HttpStatus.OK);
        } else {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/a")
    public ResponseEntity<Page<Contract>> findAllFacility(Pageable pageable) {
        if (contractService.listContract(pageable).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(contractService.listContract(pageable), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Contract> saveContract(@RequestBody Contract contract) {
        System.out.println("nhan");


        System.out.println(contract.getDeposit());

        if(contractService.findContractId(contract.getIdContract())!=null){
            return  new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }else {

            contractService.saveContract(contract);
            return  new ResponseEntity<>(contract,HttpStatus.CREATED);
        }
    }

}
