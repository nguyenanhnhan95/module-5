package com.example.manage_furamae.model;

import javax.persistence.*;

@Entity
@Table(name="type_customer")
public class TypeCustomer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_type_customer")
    private  int idTypeCustomer;
    @Column(name="name_type_customer")
    private  String nameTypeCustomer;

    public TypeCustomer() {
    }

    public TypeCustomer(int idTypeCustomer, String nameTypeCustomer) {
        this.idTypeCustomer = idTypeCustomer;
        this.nameTypeCustomer = nameTypeCustomer;
    }

    public int getIdTypeCustomer() {
        return idTypeCustomer;
    }

    public void setIdTypeCustomer(int idTypeCustomer) {
        this.idTypeCustomer = idTypeCustomer;
    }

    public String getNameTypeCustomer() {
        return nameTypeCustomer;
    }

    public void setNameTypeCustomer(String nameTypeCustomer) {
        this.nameTypeCustomer = nameTypeCustomer;
    }
}
