package com.example.manage_furamae.service;

import com.example.manage_furamae.model.Contract;
import com.example.manage_furamae.projection.IContractProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IContractService {
    Page<IContractProjection> findContracts(Pageable pageable);
    Page<Contract> listContract(Pageable pageable);
    void saveContract(Contract contract);
    Contract findContractId(int id);
}
