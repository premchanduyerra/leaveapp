package com.leavapp.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping("/example")
    public ResponseEntity<Object> getExample() {
        // Create a sample JSON object
        Map<String, String> jsonObject = new HashMap<>();
        jsonObject.put("message", "This is a sample JSON response");

        // Return the JSON object with appropriate HTTP status code
        return ResponseEntity.ok().body(jsonObject);
    }
}

