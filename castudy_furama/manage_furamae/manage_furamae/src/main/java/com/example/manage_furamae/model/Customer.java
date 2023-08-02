package com.example.manage_furamae.model;

import javax.persistence.*;

@Entity
@Table(name="customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_customer")
    private  int idCustomer;
    @Column(name = "name_customer")
    private String nameCustomer;
    @Column(name="date_of_birth")
    private String dateOfBirth;
    private String gender;
    @Column(name="id_card")
    private String idCard;
    @Column(name = "phone_number")
    private String phoneNumber;
    private String emailCustomer;
    @Column(name = "address_customer")
    private String addressCustomer;
    @Column(name="bye_customer")
    private boolean byeDelete=false;
    @ManyToOne
    @JoinColumn(name="id_type_customer")
    private TypeCustomer typeCustomer;

    public Customer() {
    }

    public Customer(String nameCustomer, String dateOfBirth, String gender, String idCard, String phoneNumber, String emailCustomer, String addressCustomer, boolean byeDelete, TypeCustomer typeCustomer) {
        this.nameCustomer = nameCustomer;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.idCard = idCard;
        this.phoneNumber = phoneNumber;
        this.emailCustomer = emailCustomer;
        this.addressCustomer = addressCustomer;
        this.byeDelete = byeDelete;
        this.typeCustomer = typeCustomer;
    }

    public Customer(int idCustomer, String nameCustomer, String dateOfBirth, String gender, String idCard, String phoneNumber, String emailCustomer, String addressCustomer, boolean byeDelete, TypeCustomer typeCustomer) {
        this.idCustomer = idCustomer;
        this.nameCustomer = nameCustomer;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.idCard = idCard;
        this.phoneNumber = phoneNumber;
        this.emailCustomer = emailCustomer;
        this.addressCustomer = addressCustomer;
        this.byeDelete = byeDelete;
        this.typeCustomer = typeCustomer;
    }

    public boolean isByeDelete() {
        return byeDelete;
    }

    public void setByeDelete(boolean byeDelete) {
        this.byeDelete = byeDelete;
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

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmailCustomer() {
        return emailCustomer;
    }

    public void setEmailCustomer(String emailCustomer) {
        this.emailCustomer = emailCustomer;
    }

    public String getAddressCustomer() {
        return addressCustomer;
    }

    public void setAddressCustomer(String addressCustomer) {
        this.addressCustomer = addressCustomer;
    }

    public TypeCustomer getTypeCustomer() {
        return typeCustomer;
    }

    public void setTypeCustomer(TypeCustomer typeCustomer) {
        this.typeCustomer = typeCustomer;
    }
}
