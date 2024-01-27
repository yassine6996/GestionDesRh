package com.gestionrh.gestionrhbackend.services.candiat;

import com.gestionrh.gestionrhbackend.dtos.CompanyDto;
import com.gestionrh.gestionrhbackend.dtos.PostulerDto;
import com.gestionrh.gestionrhbackend.entities.Company;
import com.gestionrh.gestionrhbackend.entities.Postuler;
import com.gestionrh.gestionrhbackend.entities.User;
import com.gestionrh.gestionrhbackend.enums.PostulerStatus;
import com.gestionrh.gestionrhbackend.repositories.CompanyRepository;
import com.gestionrh.gestionrhbackend.repositories.PostulerRepository;
import com.gestionrh.gestionrhbackend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CandidatServiceImpl implements CandiatService{

    private final CompanyRepository companyRepository;

    private final UserRepository userRepository;

    private final PostulerRepository postulerRepository;

    @Override
    public List<CompanyDto> getAllCompany() {
        return companyRepository.findAll().stream().map(Company::getCompanyDto).collect(Collectors.toList());
    }

    @Override
    public boolean postulerCompany(PostulerDto postulerDto) throws IOException {
        Optional<Company> optionalCompany = companyRepository.findById(postulerDto.getId());
        Optional<User>  optionalUser = userRepository.findById(postulerDto.getId());
        if(optionalCompany.isPresent() && optionalUser.isPresent()){
            Company existingCompany = optionalCompany.get();
            Postuler postuler = new Postuler();
            postuler.setUser(optionalUser.get());
            postuler.setCompany(existingCompany);
            postuler.setPostulerStatus(PostulerStatus.PENDING);
            postuler.setImg(postulerDto.getImg().getBytes());
            postulerRepository.save(postuler);
            return true;
        }
        return false;
    }

    @Override
    public CompanyDto getCompanyById(Long companyId) {
        Optional<Company> optionalCompany = companyRepository.findById(companyId);
        return  optionalCompany.map(Company::getCompanyDto).orElse(null);
    }
}
