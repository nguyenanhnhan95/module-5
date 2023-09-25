package com.example.test_module6.model;

import javax.persistence.*;

@Entity
public class Facility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_facility")
    private int idFacility;
    private String nameFacility;
    private String daterPublic;
    private String addressFacility;
    @Column(columnDefinition = "int default 0")
    private boolean flagFacility;

    public Facility() {
    }

    public Facility(int idFacility, String nameFacility, String daterPublic, String addressFacility, boolean flagFacility) {
        this.idFacility = idFacility;
        this.nameFacility = nameFacility;
        this.daterPublic = daterPublic;
        this.addressFacility = addressFacility;
        this.flagFacility = flagFacility;
    }

    public int getIdFacility() {
        return idFacility;
    }

    public void setIdFacility(int idFacility) {
        this.idFacility = idFacility;
    }

    public String getNameFacility() {
        return nameFacility;
    }

    public void setNameFacility(String nameFacility) {
        this.nameFacility = nameFacility;
    }

    public String getDaterPublic() {
        return daterPublic;
    }

    public void setDaterPublic(String daterPublic) {
        this.daterPublic = daterPublic;
    }

    public String getAddressFacility() {
        return addressFacility;
    }

    public void setAddressFacility(String addressFacility) {
        this.addressFacility = addressFacility;
    }

    public boolean isFlagFacility() {
        return flagFacility;
    }

    public void setFlagFacility(boolean flagFacility) {
        this.flagFacility = flagFacility;
    }
}
