package com.example.okboard.dto;

import com.example.okboard.domain.User;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class UserDTO {

    private Long id;
    private String email;
    private String name;
    private String password;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Boolean role = false;

    public User toUser() {
        return User.builder()
                .id(id)
                .email(email)
                .name(name)
                .password(password)
                .createdAt(createdAt)
                .updatedAt(updatedAt)
                .role(role)
                .build();
    }

}