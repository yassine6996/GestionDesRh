package com.gestionrh.gestionrhbackend.services.admin;

import com.gestionrh.gestionrhbackend.dtos.CompanyDto;
import com.gestionrh.gestionrhbackend.entities.Company;
import com.gestionrh.gestionrhbackend.repositories.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{
    private final CompanyRepository companyRepository;

    @Override
    public boolean postCompany(CompanyDto companyDto) throws IOException {
        try {
            Company company = new Company();
            company.setName(companyDto.getName());
            company.setDescription(companyDto.getDescription());
            company.setImg(companyDto.getImg().getBytes());
            companyRepository.save(company);
            return true;
        }catch (Exception e){
            return false;
        }

    }

    @Override
    public List<CompanyDto> getAllCompanies() {

        return companyRepository.findAll().stream().map(Company::getCompanyDto).collect(Collectors.toList());
    }

    @Override
    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }

    @Override
    public CompanyDto getCompanyById(Long id) {
        Optional<Company> optionalCompany = companyRepository.findById(id);
        return optionalCompany.map(Company::getCompanyDto).orElse(null);
    }

    @Override
    public boolean updateCompany(Long companyId, CompanyDto companyDto) throws IOException {
        Optional<Company> optionalCompany = companyRepository.findById(companyId);
        if(optionalCompany.isPresent()){
            Company exestingCompany = optionalCompany.get();
            if(companyDto.getImg() != null){
                exestingCompany.setImg(companyDto.getImg().getBytes());
            }
            exestingCompany.setName(companyDto.getName());
            exestingCompany.setDescription(companyDto.getDescription());
            companyRepository.save(exestingCompany);
            return true;
        }else{
            return false;
        }

    }

    /*public CompanyDto postCompany(CompanyDto companyDto) throws IOException {
            Company company = new Company();
            company.setName(companyDto.getName());
            company.setDescription(companyDto.getDescription());
            company.setImg(companyDto.getImg().getBytes());
            Company createdCompany = companyRepository.save(company);
            CompanyDto createdCompanyDto = new CompanyDto();
            createdCompanyDto.setId(createdCompany.getId());
            return createdCompanyDto;

    }*/


}
