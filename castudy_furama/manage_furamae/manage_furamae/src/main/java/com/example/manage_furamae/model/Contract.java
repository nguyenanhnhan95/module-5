package com.example.manage_furamae.model;

import javax.persistence.*;

@Entity
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idContract;
    private  String startDate;
    private  String endEnd;
    private  double deposit;
    private double totalPrice;
    @ManyToOne()
    @JoinColumn(name="idFacility")
    private Facility facility;
    @ManyToOne()
    @JoinColumn(name="id_customer")
    private Customer customer;

    public Contract() {
    }

    public Contract(int idContract, String startDate, String endEnd, double deposit, double totalPrice, Facility facility, Customer customer) {
        this.idContract = idContract;
        this.startDate = startDate;
        this.endEnd = endEnd;
        this.deposit = deposit;
        this.totalPrice = totalPrice;
        this.facility = facility;
        this.customer = customer;
    }

    public int getIdContract() {
        return idContract;
    }

    public void setIdContract(int idContract) {
        this.idContract = idContract;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndEnd() {
        return endEnd;
    }

    public void setEndEnd(String endEnd) {
        this.endEnd = endEnd;
    }

    public double getDeposit() {
        return deposit;
    }

    public void setDeposit(double deposit) {
        this.deposit = deposit;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
