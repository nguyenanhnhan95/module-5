package com.example.test_module6.model;

import javax.persistence.*;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int idCustomer;
    private String nameCustomer;
    private String idCard;
    private String birthCustomer;
    private boolean  genderCustomer;
    private String dateRegister;
    private String expireDate;
    @ManyToOne
    @JoinColumn(name="id_employee")
    private Employee employee;

    public Customer() {
    }

    public Customer(int idCustomer, String nameCustomer, String idCard, String birthCustomer, boolean genderCustomer, String dateRegister, String expireDate, Employee employee) {
        this.idCustomer = idCustomer;
        this.nameCustomer = nameCustomer;
        this.idCard = idCard;
        this.birthCustomer = birthCustomer;
        this.genderCustomer = genderCustomer;
        this.dateRegister = dateRegister;
        this.expireDate = expireDate;
        this.employee = employee;
    }

    public int getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(int idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getBirthCustomer() {
        return birthCustomer;
    }

    public void setBirthCustomer(String birthCustomer) {
        this.birthCustomer = birthCustomer;
    }

    public boolean isGenderCustomer() {
        return genderCustomer;
    }

    public void setGenderCustomer(boolean genderCustomer) {
        this.genderCustomer = genderCustomer;
    }

    public String getDateRegister() {
        return dateRegister;
    }

    public void setDateRegister(String dateRegister) {
        this.dateRegister = dateRegister;
    }

    public String getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(String expireDate) {
        this.expireDate = expireDate;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
