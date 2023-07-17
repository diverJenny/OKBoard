package com.example.okboard.service;

import com.example.okboard.domain.User;
import com.example.okboard.dto.UserDTO;
import com.example.okboard.repository.SignRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class SignService {

    private final SignRepository repository;

    // 로그인
    public boolean signIn(String email, String password) {
        User user = repository.findByEmail(email);
        if(user != null && user.getPassword().equals(password)) {
            // 패스워드가 일치 하면 인증 성공
            return true;
        }
        // 인증 실패
        return false;
    }

    // 회원가입
    public Long signUp(UserDTO userDto) {
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setName((userDto.getName()));
        user.setPassword(userDto.getPassword());
        user.setCreatedAt(LocalDateTime.now());
        user.setRole(false);

        User saveUser = repository.save(user);
        return saveUser.getId();
    }

    // 이메일로 사용자 정보 가져오기
    public User getUserByEmail(String email) {
        return repository.findByEmail(email);
    }
}
