package com.example.okboard.repository;

import com.example.okboard.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
