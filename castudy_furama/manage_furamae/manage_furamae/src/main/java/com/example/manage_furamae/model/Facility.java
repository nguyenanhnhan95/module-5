package com.example.manage_furamae.model;



import javax.persistence.*;

@Entity
@Table(name="facility")
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    @Column(name="name_facility")
    private String name;
    @Column(name = "img_facility")
    private  String img;
    @Column(name="area_facility")
    private double area;
    @Column(name="price_facility")
    private double price;
    @Column(name="capacity_facility")
    private  int capacity;
    @Column(name="standard_facility")
    private  int standard;
    @ManyToOne()
    @JoinColumn(name = "id_free")
    private FreeFacility freeService;

    public Facility() {
    }

    public Facility(int id, String name, String img, double area, double price, int capacity, int standard, FreeFacility freeService) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.area = area;
        this.price = price;
        this.capacity = capacity;
        this.standard = standard;
        this.freeService = freeService;
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

    public FreeFacility getFreeService() {
        return freeService;
    }

    public void setFreeService(FreeFacility freeService) {
        this.freeService = freeService;
    }
}
