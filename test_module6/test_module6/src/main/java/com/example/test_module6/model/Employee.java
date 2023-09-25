package com.example.test_module6.model;

import javax.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_employee")
    private  int idEmployee;
    private String nameEmployee;
    private String birthEmployee;
    private  boolean genderEmployee;
    @ManyToOne
    @JoinColumn(name = "id_type_employee")
    private TypeEmployee typeEmployee;
    @ManyToOne
    @JoinColumn(name = "id_facility")
    private Facility facility;

    public Employee() {
    }

    public Employee(int idEmployee, String nameEmployee, String birthEmployee, boolean genderEmployee, TypeEmployee typeEmployee, Facility facility) {
        this.idEmployee = idEmployee;
        this.nameEmployee = nameEmployee;
        this.birthEmployee = birthEmployee;
        this.genderEmployee = genderEmployee;
        this.typeEmployee = typeEmployee;
        this.facility = facility;
    }

    public int getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(int idEmployee) {
        this.idEmployee = idEmployee;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getBirthEmployee() {
        return birthEmployee;
    }

    public void setBirthEmployee(String birthEmployee) {
        this.birthEmployee = birthEmployee;
    }

    public boolean isGenderEmployee() {
        return genderEmployee;
    }

    public void setGenderEmployee(boolean genderEmployee) {
        this.genderEmployee = genderEmployee;
    }

    public TypeEmployee getTypeEmployee() {
        return typeEmployee;
    }

    public void setTypeEmployee(TypeEmployee typeEmployee) {
        this.typeEmployee = typeEmployee;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }
}
