package com.gestionrh.gestionrhbackend.entities;

import com.gestionrh.gestionrhbackend.dtos.CompanyDto;
import com.gestionrh.gestionrhbackend.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    private byte[] img  ;

    public CompanyDto getCompanyDto(){
        CompanyDto companyDto = new CompanyDto();
        companyDto.setId(id);
        companyDto.setName(name);
        companyDto.setDescription(description);
        companyDto.setReturnedImg(img);
        return companyDto;
    }
}
