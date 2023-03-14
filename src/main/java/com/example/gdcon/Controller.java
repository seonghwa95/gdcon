package com.example.gdcon;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller
public class Controller {

    @GetMapping("/")
    public String index(){

        return "index";
    }

    @GetMapping("/intro/greeting")
    public String greeting() {

        return "intro/greeting";
    }
}
