package com.example.okboard.dto;

import com.example.okboard.domain.Post;
import com.example.okboard.domain.User;
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