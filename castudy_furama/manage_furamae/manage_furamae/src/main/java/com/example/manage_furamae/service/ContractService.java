package com.example.manage_furamae.service;

import com.example.manage_furamae.model.Contract;
import com.example.manage_furamae.projection.IContractProjection;
import com.example.manage_furamae.repository.IContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContractService implements IContractService{
    @Autowired
    private IContractRepository contractRepository;
    @Override
    public Page<IContractProjection> findContracts(Pageable pageable) {
        return contractRepository.findAllContract(pageable);
    }

    @Override
    public Page<Contract> listContract(Pageable pageable) {
        return contractRepository.findAll(pageable );
    }

    @Override
    public void saveContract(Contract contract) {
        contractRepository.save(contract);
    }

    @Override
    public Contract findContractId(int id) {
        return contractRepository.findById(id).orElse(null);
    }
}
