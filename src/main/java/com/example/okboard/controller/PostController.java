package com.example.okboard.controller;

import com.example.okboard.domain.User;
import com.example.okboard.dto.PostDTO;
import com.example.okboard.service.PostService;
import com.example.okboard.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {

    private final PostService service;
    private final UserService userService;

    // 전체 게시글 조회
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PostDTO>> getPosts() throws Exception {
        List<PostDTO> dtoList = service.getPosts();
        return ResponseEntity.ok(dtoList);
    }

    // 게시글 조회
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getPost(@PathVariable("id") Long id) throws Exception {
        PostDTO post = service.findPostById(id);
        return ResponseEntity.ok(post);
    }


    // 게시글 작성
    @PostMapping
    public ResponseEntity<String> createPost(@RequestBody PostDTO postDto) throws Exception {
        System.out.printf(String.valueOf(postDto));
        // 사용자 객체 조회
        Long userId = postDto.getUser().getId();
        User user = userService.findUserById(userId).toUser();

        // 사용자 객체를 postDto에 설정
        postDto.setUser(user);
        postDto.setCreatedAt(LocalDateTime.now());
        postDto.setTitle(postDto.getTitle());
        postDto.setContent(postDto.getContent());
        service.createPost(postDto);

        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }

    // 게시글 수정
    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> updatePost(@PathVariable("id") Long id, @RequestBody PostDTO postDto) throws Exception {
        PostDTO existingPost = service.findPostById(id);

        existingPost.setTitle(postDto.getTitle());
        existingPost.setContent(postDto.getContent());
        existingPost.setUpdatedAt(LocalDateTime.now());

        service.updatePost(existingPost);

        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> deletePost(@PathVariable("id") Long id) throws Exception {
        service.deletePost(id);
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    }

}