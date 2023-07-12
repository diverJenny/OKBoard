package com.example.okboard.service;

import com.example.okboard.domain.Post;
import com.example.okboard.dto.PostDTO;
import com.example.okboard.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository repository;

    public List<PostDTO> getPosts() {
        List<Post> postList = repository.findAll();
        List<PostDTO> postDtoList = new ArrayList<>();
        for(Post post : postList) {
            postDtoList.add(post.toPostDto());
        }
        return postDtoList;
    }

    public PostDTO findPostById(Long id) throws Exception {
        return repository.findById(id)
                .map(Post::toPostDto)
                .orElseThrow(() -> new Exception("Post not found with Id: " + id));
    }

    public int createPost(PostDTO postDto) {
        Post post = new Post();
        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());

        return Math.toIntExact(repository.save(postDto.toPost()).getId());
    }

    public void updatePost(PostDTO postDto) throws Exception {
        Post existingPost = repository.findById(postDto.getId())
                .orElseThrow(() -> new Exception("Post not found with ID: " + postDto.getId()));

        existingPost.setTitle(postDto.getTitle());
        existingPost.setContent(postDto.getContent());
        existingPost.setUpdatedAt(postDto.getUpdatedAt());

        repository.save(existingPost);
    }

    public void deletePost(Long id) {
        repository.deleteById(id);
    }
}