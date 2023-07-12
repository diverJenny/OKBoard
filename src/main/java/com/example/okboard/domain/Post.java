package com.example.okboard.domain;

import com.example.okboard.dto.PostDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "post_id")
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int viewCnt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public PostDTO toPostDto() {
        return PostDTO.builder()
                .id(id)
                .title(title)
                .content(content)
                .createdAt(createdAt)
                .updatedAt(updatedAt)
                .viewCnt(viewCnt)
                .build();
    }
}