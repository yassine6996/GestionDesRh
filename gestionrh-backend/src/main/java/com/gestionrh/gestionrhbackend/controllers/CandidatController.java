package com.gestionrh.gestionrhbackend.controllers;

import com.gestionrh.gestionrhbackend.dtos.CompanyDto;
import com.gestionrh.gestionrhbackend.dtos.PostulerDto;
import com.gestionrh.gestionrhbackend.services.candiat.CandiatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/candidat")
@RequiredArgsConstructor
public class CandidatController {

    private final CandiatService candiatService;

    @GetMapping("/companies")
    public ResponseEntity<List<CompanyDto>> getAllCompany(){
        List<CompanyDto> companyDtoList = candiatService.getAllCompany();
        return ResponseEntity.ok(companyDtoList);
    }

    @PostMapping("/company/postuler")
    public ResponseEntity<Void> PostulerCompany(@RequestBody PostulerDto postulerDto) throws IOException {
        boolean success =  candiatService.postulerCompany(postulerDto);
        if(success) return ResponseEntity.status(HttpStatus.CREATED).build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }


    @GetMapping("/company/{companyId}")
    public ResponseEntity<CompanyDto> getCompanyById(@PathVariable Long companyId){
        CompanyDto companyDto= candiatService.getCompanyById(companyId);
        if(companyDto == null)return ResponseEntity.notFound().build();
        return ResponseEntity.ok(companyDto);
    }

}
