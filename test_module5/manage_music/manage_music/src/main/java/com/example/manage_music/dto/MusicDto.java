package com.example.manage_music.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotEmpty;

public class MusicDto implements Validator {

    @NotEmpty
    private String nameMusic;
    @NotEmpty
    private String nameSing;
    @NotEmpty
    private String releaseDate;
    @NotEmpty
    private Long numberLikes;

    public MusicDto() {
    }

    public MusicDto(String nameMusic, String nameSing, String releaseDate, Long numberLikes) {
        this.nameMusic = nameMusic;
        this.nameSing = nameSing;
        this.releaseDate = releaseDate;
        this.numberLikes = numberLikes;
    }

    public String getNameMusic() {
        return nameMusic;
    }

    public void setNameMusic(String nameMusic) {
        this.nameMusic = nameMusic;
    }

    public String getNameSing() {
        return nameSing;
    }

    public void setNameSing(String nameSing) {
        this.nameSing = nameSing;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Long getNumberLikes() {
        return numberLikes;
    }

    public void setNumberLikes(Long numberLikes) {
        this.numberLikes = numberLikes;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
