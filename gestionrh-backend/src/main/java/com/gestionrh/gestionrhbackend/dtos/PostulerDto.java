package com.gestionrh.gestionrhbackend.dtos;


import com.gestionrh.gestionrhbackend.entities.Company;
import com.gestionrh.gestionrhbackend.entities.User;
import com.gestionrh.gestionrhbackend.enums.PostulerStatus;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;


@Data
public class PostulerDto {

    private Long id;
    private MultipartFile img ;
    private PostulerStatus postulerStatus;

    private User user;

    private Company company;
    private byte[] returnedImg;
}
