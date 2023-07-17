package com.example.okboard.dto;

import com.example.okboard.domain.Post;
import com.example.okboard.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class PostDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int viewCnt;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) // Hibernate 프록시 필드 제외
    private User user;

    public Post toPost() {
        return Post.builder()
                .id(id)
                .title(title)
                .content(content)
                .createdAt(createdAt)
                .updatedAt(updatedAt)
                .viewCnt(viewCnt)
                .user(user)
                .build();
    }
}