package com.example.manage_music.controller;

import com.example.manage_music.model.Status;
import com.example.manage_music.repository.ITypeMusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/status")
public class TypeMusicController {
    @Autowired
    private ITypeMusicRepository typeMusicRepository;
    @GetMapping()
    public ResponseEntity<List<Status>> findStatus(){
        if(typeMusicRepository.findStatus().isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(typeMusicRepository.findStatus(),HttpStatus.OK);
        }
    }
}
