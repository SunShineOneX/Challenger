package com.challenger.demo.controllers;

import com.challenger.demo.models.Keyboard;
import com.challenger.demo.services.KeyboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/keyboards")
public class KeyboardController {

    @Autowired
    KeyboardService keyboardService;

    @GetMapping
    public Iterable<Keyboard> findAll() {
        return keyboardService.listKeyboards();
    }

    @PostMapping
    public Keyboard createKeyboard(@RequestBody Keyboard keyboard) { return keyboardService.createKeyboard(keyboard);}


    @DeleteMapping("/{keyboardId}")
    public HttpStatus deleteKeyboard(@PathVariable long keyboardId) {
        return keyboardService.deleteKeyboard(keyboardId);
    }

}
