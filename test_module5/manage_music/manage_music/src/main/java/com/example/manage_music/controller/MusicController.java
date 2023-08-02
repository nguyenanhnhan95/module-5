package com.example.manage_music.controller;


import com.example.manage_music.model.Music;
import com.example.manage_music.repository.ITypeMusicRepository;
import com.example.manage_music.service.IMusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/musics")
public class MusicController {
    @Autowired
    private IMusicService musicService;
    @GetMapping("/pages/{page}/{limit}")
    public ResponseEntity<Page<Music>> showMusics(@PathVariable int page,@PathVariable int limit){
        Pageable pageable= PageRequest.of(page,limit);
        if(musicService.findAll(pageable).getContent().isEmpty()){
            return new ResponseEntity<>(musicService.findAll(pageable),HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(musicService.findAll(pageable),HttpStatus.OK);
        }
    }
    @PostMapping("/")
    public  ResponseEntity<?> saveMusic(@RequestBody Music music){
        System.out.println(music.getNameMusic());
        musicService.saveMusic(music);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public  ResponseEntity<Music> findCustomer(@PathVariable int id){
        if(musicService.findMusic(id)==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(musicService.findMusic(id),HttpStatus.OK);
        }
    }
}
