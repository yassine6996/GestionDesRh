package com.gestionrh.gestionrhbackend.services.admin;

import com.gestionrh.gestionrhbackend.dtos.CompanyDto;

import java.io.IOException;
import java.util.List;

public interface AdminService {
    //CompanyDto postCompany(CompanyDto companyDto) throws IOException;
    boolean postCompany(CompanyDto companyDto) throws IOException;

    List<CompanyDto> getAllCompanies();

    void deleteCompany(Long id);

    CompanyDto getCompanyById(Long id);

    boolean updateCompany(Long companyId, CompanyDto companyDto) throws IOException;
}
