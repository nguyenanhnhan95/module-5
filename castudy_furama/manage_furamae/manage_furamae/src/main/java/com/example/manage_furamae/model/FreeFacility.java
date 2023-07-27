package com.example.manage_furamae.model;

import javax.persistence.*;

@Entity
@Table(name = "free_facility")
public class FreeFacility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_free")
    private int id;
    @Column(name="name_free")
    private String nameFree;

    public FreeFacility() {
    }

    public FreeFacility(int id, String nameFree) {
        this.id = id;
        this.nameFree = nameFree;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameFree() {
        return nameFree;
    }

    public void setNameFree(String nameFree) {
        this.nameFree = nameFree;
    }
}

