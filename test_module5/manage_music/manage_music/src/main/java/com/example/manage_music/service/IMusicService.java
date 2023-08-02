package com.example.manage_music.service;

import com.example.manage_music.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IMusicService {
    Page<Music> findAll(Pageable pageable);

    void saveMusic(Music music);

    Music findMusic(int id);
}
