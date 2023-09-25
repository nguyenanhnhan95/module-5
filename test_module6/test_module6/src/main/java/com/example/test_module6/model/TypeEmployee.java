package com.example.test_module6.model;

import javax.persistence.*;

@Entity
public class TypeEmployee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_type_employee")
    private int idTypeEmployee;
    private String nameTypeEmployee;

    public TypeEmployee() {
    }

    public TypeEmployee(int idTypeEmployee, String nameTypeEmployee) {
        this.idTypeEmployee = idTypeEmployee;
        this.nameTypeEmployee = nameTypeEmployee;
    }

    public int getIdTypeEmployee() {
        return idTypeEmployee;
    }

    public void setIdTypeEmployee(int idTypeEmployee) {
        this.idTypeEmployee = idTypeEmployee;
    }

    public String getNameTypeEmployee() {
        return nameTypeEmployee;
    }

    public void setNameTypeEmployee(String nameTypeEmployee) {
        this.nameTypeEmployee = nameTypeEmployee;
    }
}
