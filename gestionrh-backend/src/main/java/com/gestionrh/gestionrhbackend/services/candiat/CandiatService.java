package com.gestionrh.gestionrhbackend.services.candiat;

import com.gestionrh.gestionrhbackend.dtos.CompanyDto;
import com.gestionrh.gestionrhbackend.dtos.PostulerDto;

import java.io.IOException;
import java.util.List;

public interface CandiatService {

    List<CompanyDto> getAllCompany();

    boolean postulerCompany(PostulerDto postulerDto) throws IOException;

    CompanyDto getCompanyById(Long companyId);

}
