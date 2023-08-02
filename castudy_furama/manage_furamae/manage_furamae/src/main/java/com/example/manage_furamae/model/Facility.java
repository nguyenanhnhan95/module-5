package com.example.manage_furamae.model;



import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="facilities")
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_facility")
    private int id;
    @Column(name="name_facility")
    private String name;
    @Column(name = "img_facility",columnDefinition = "longtext")
    private  String img;
    @Column(name = "free_facility",columnDefinition = "longtext")
    private  String freeFacility;
    @Column(name = "another_facility",columnDefinition = "longtext")
    private  String anotherFacility;
    @Column(name="are_facility")
    private double area;
    @Column(name="price_facility")
    private double price;
    @Column(name="capacity_facility")
    private int capacity;
    @Column(name="standard_facility")
    private int standard;
    @Column(name="floor")
    private double floor;
    @Column(name="pool")
    private Double pool;
    @Column(name="descriptions",columnDefinition = "longtext")
    private String descriptions;
    @Column(name="flag_delete")
    private boolean flagDelete=false;

    public Facility() {
    }

    public Facility(String name, String img, String freeFacility, String anotherFacility, double area, double price, int capacity, int standard, double floor, Double pool, String descriptions, boolean flagDelete) {
        this.name = name;
        this.img = img;
        this.freeFacility = freeFacility;
        this.anotherFacility = anotherFacility;
        this.area = area;
        this.price = price;
        this.capacity = capacity;
        this.standard = standard;
        this.floor = floor;
        this.pool = pool;
        this.descriptions = descriptions;
        this.flagDelete = flagDelete;
    }

    public Facility(int id, String name, String img, String freeFacility, String anotherFacility, double area, double price, int capacity, int standard, double floor, Double pool, String descriptions, boolean flagDelete) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.freeFacility = freeFacility;
        this.anotherFacility = anotherFacility;
        this.area = area;
        this.price = price;
        this.capacity = capacity;
        this.standard = standard;
        this.floor = floor;
        this.pool = pool;
        this.descriptions = descriptions;
        this.flagDelete = flagDelete;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getFreeFacility() {
        return freeFacility;
    }

    public void setFreeFacility(String freeFacility) {
        this.freeFacility = freeFacility;
    }

    public String getAnotherFacility() {
        return anotherFacility;
    }

    public void setAnotherFacility(String anotherFacility) {
        this.anotherFacility = anotherFacility;
    }

    public double getArea() {
        return area;
    }

    public void setArea(double area) {
        this.area = area;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getStandard() {
        return standard;
    }

    public void setStandard(int standard) {
        this.standard = standard;
    }

    public double getFloor() {
        return floor;
    }

    public void setFloor(double floor) {
        this.floor = floor;
    }

    public Double getPool() {
        return pool;
    }

    public void setPool(Double pool) {
        this.pool = pool;
    }

    public boolean isFlagDelete() {
        return flagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        this.flagDelete = flagDelete;
    }
}
