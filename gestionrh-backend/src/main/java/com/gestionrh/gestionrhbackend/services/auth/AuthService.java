package com.gestionrh.gestionrhbackend.services.auth;

import com.gestionrh.gestionrhbackend.dtos.SignupRequest;
import com.gestionrh.gestionrhbackend.dtos.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);
    public boolean hasUserWithEmail(String email);
}
