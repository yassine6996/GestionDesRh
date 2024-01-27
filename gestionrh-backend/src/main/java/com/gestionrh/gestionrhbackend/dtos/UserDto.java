package com.gestionrh.gestionrhbackend.dtos;

import com.gestionrh.gestionrhbackend.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private UserRole userRole;
}
