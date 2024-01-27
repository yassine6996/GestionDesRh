package com.gestionrh.gestionrhbackend.controllers;


import com.gestionrh.gestionrhbackend.dtos.CompanyDto;
import com.gestionrh.gestionrhbackend.repositories.CompanyRepository;
import com.gestionrh.gestionrhbackend.services.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/company")
    /*public ResponseEntity<CompanyDto> postCompany(@ModelAttribute CompanyDto companyDto) throws IOException {
        CompanyDto createdCompanyDto = adminService.postCompany(companyDto);
        if(createdCompanyDto == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(createdCompanyDto);
    }*/
    public ResponseEntity<CompanyDto> postCompany(@ModelAttribute CompanyDto companyDto) throws IOException {
        boolean success = adminService.postCompany(companyDto);
        if(success) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }
    @GetMapping("/companies")
    public ResponseEntity<?> getAllCompanies(){
        return ResponseEntity.ok(adminService.getAllCompanies());
    }

    @DeleteMapping("/company/{id}")
    public ResponseEntity<Void> deletCompany(@PathVariable Long id){
        adminService.deleteCompany(id);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/company/{id}")
    public ResponseEntity<CompanyDto> getCompanyById(@PathVariable Long id){
        CompanyDto  companyDto = adminService.getCompanyById(id);
        return ResponseEntity.ok(companyDto);
    }

    @PutMapping("/company/{companyId}")
    public ResponseEntity<Void> updateCompany(@PathVariable Long companyId, @ModelAttribute CompanyDto companyDto) throws IOException{
        try {
            boolean success = adminService.updateCompany(companyId,companyDto);
            if(success)return ResponseEntity.status(HttpStatus.OK).build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

}
