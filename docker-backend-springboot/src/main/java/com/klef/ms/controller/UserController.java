package com.klef.ms.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController 
{
    @GetMapping("/")
    public String home() {
        return "Root route";
    }

    @GetMapping("/home")
    public String homePage() {
        return "Home route";
    }

    @GetMapping("/display/id/{id}")
    public String displayById(@PathVariable long id) 
    {
        return "Display route for ID: " + id;
    }

    @GetMapping("/display/name/{name}")
    public String displayByName(@PathVariable String name) 
    {
        return "Display route for name: " + name;
    }

    @GetMapping("/display")
    public String displayByRequestParam(@RequestParam String name) 
    {
        return "Display route for name: " + name;
    }
}
