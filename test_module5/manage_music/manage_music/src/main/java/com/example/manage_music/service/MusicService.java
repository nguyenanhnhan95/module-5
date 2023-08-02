package com.example.manage_music.service;

import com.example.manage_music.model.Music;
import com.example.manage_music.repository.IMusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class MusicService implements IMusicService{
    @Autowired
    private IMusicRepository musicRepository;
    @Override
    public Page<Music> findAll(Pageable pageable) {
        return musicRepository.findAllMusics(pageable);
    }

    @Override
    public void saveMusic(Music music) {
        musicRepository.saveMusic(music);
    }

    @Override
    public Music findMusic(int id) {
        System.out.println(musicRepository.findById(id).getNameMusic());
        return musicRepository.findById(id);
    }
}
