package com.example.manage_music.model;

import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.persistence.*;

@Entity
@Table(name = "musics")
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(columnDefinition = "longtext")
    private String nameMusic;
    @Column(columnDefinition = "longtext")
    private String nameSing;
    private String releaseDate;
    private Long numberLikes;
    @Column(nullable = false)
    private boolean flagDelete;
    @ManyToOne
    @JoinColumn(name = "id_status")
    private Status status;
    public Music() {
    }

    public Music(int id, String nameMusic, String nameSing, String releaseDate, Long numberLikes, boolean flagDelete, Status status) {
        this.id = id;
        this.nameMusic = nameMusic;
        this.nameSing = nameSing;
        this.releaseDate = releaseDate;
        this.numberLikes = numberLikes;
        this.flagDelete = flagDelete;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public boolean isFlagDelete() {
        return flagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        this.flagDelete = flagDelete;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
