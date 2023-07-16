package com.example.okboard.service;

import com.example.okboard.domain.User;
import com.example.okboard.dto.UserDTO;
import com.example.okboard.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public List<UserDTO> getUsers() throws Exception{
        List<User> userList = repository.findAll();
        List<UserDTO> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(user.toUserDto());
        }
        return userDtoList;
    }

    public UserDTO findUserById(Long id) throws Exception {
        return repository.findById(id)
                .map(User::toUserDto)
                .orElseThrow(() -> new Exception("User not found with ID: " + id));
    }

    public boolean validatePassword(Long id, String password) {
        Optional<User> userOptional = repository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getPassword().equals(password);
        }
        throw new RuntimeException("User not found");
    }

    public void updateUser(UserDTO userDto) throws Exception {
        User existingUser = repository.findById(userDto.getId())
                .orElseThrow(() -> new Exception("User not found with ID: " + userDto.getId()));

        existingUser.setName(userDto.getName());
        existingUser.setPassword(userDto.getPassword());
        existingUser.setUpdatedAt(userDto.getUpdatedAt());

        repository.save(existingUser);
    }

    public void deleteUser(Long id) throws Exception {
        repository.deleteById(id);
    }

}