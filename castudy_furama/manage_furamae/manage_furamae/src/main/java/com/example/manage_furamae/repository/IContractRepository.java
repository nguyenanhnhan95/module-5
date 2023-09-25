package com.example.manage_furamae.repository;

import com.example.manage_furamae.model.Contract;
import com.example.manage_furamae.projection.IContractProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface IContractRepository extends JpaRepository<Contract,Integer> {
    @Query(value ="select name_facility as nameFacility,name_customer as nameCustomer,phone_number as phoneNumber,address_customer as addressCustomer,deposit,total_price as totalPrice,end_end as dateEnd,start_date as dateStart from contract c\n" +
            "join customers cu on cu.id_customer=c.id_customer\n" +
            "join facilities f on f.id_facility=c.id_facility",nativeQuery = true)
    Page<IContractProjection> findAllContract(Pageable pageable);

}
