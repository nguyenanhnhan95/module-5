package com.example.manage_music.repository;

import com.example.manage_music.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITypeMusicRepository extends JpaRepository<Status,Integer> {
    @Query(value = "select *  from  status;",nativeQuery = true)
    List<Status> findStatus();
}
