package com.gestionrh.gestionrhbackend.dtos;

import com.gestionrh.gestionrhbackend.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse{
    private String jwt;
    private UserRole userRole;
    private Long userId;
}
