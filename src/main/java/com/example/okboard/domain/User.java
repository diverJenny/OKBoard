package com.example.okboard.domain;

import com.example.okboard.dto.UserDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

//JPA의 entity로 등록
@Entity
// 필드의 Getter를 생성
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    // 해당 컬럼이 식별키라는 것을 의미
    @javax.persistence.Id
    @Id
    // 식별키 생성 전략 명시(AUTO : 데이터베이스에 맞게 자동으로 생성)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // DB 컬럼으로 등록
    @Column(name = "user_id", nullable = true)
    private Long id;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(length = 20, nullable = false)
    private String name;

    @Column(length = 50, nullable = false)
    private String password;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", nullable = false)
    private LocalDateTime createdAt; // createdAt 필드에 @Column 어노테이션 추가

    private LocalDateTime updatedAt;

    @ColumnDefault("false")
    private Boolean role;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Post> posts;

    public UserDTO toUserDto() {
        return UserDTO.builder()
                .id(id)
                .email(email)
                .name(name)
                .password(password)
                .createdAt(createdAt)
                .role(role)
                .build();
    }
}
