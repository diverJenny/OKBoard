package com.example.okboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/sign-in")
    public String signInPage() {
        return "forward:/index.html";
    }

    @GetMapping("/sign-up")
    public String signUpPage() {
        return "forward:/index.html";
    }

}
