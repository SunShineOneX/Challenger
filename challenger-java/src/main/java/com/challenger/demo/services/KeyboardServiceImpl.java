package com.challenger.demo.services;

import com.challenger.demo.models.Keyboard;
import com.challenger.demo.repositories.KeyboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class KeyboardServiceImpl implements KeyboardService {
    @Autowired
    private KeyboardRepository keyboardRepository;

    @Override
    public Iterable<Keyboard> listKeyboards() {
        return keyboardRepository.findAll();
    }

    @Override
    public Keyboard queryKeyboards(String model, String manufacturer) {
        return null;
    }

    @Override
    public Keyboard createKeyboard(Keyboard keyboard) {
        return keyboardRepository.save(keyboard);
    }

    @Override
    public HttpStatus deleteKeyboard(long keyboardId) {
        keyboardRepository.deleteById(keyboardId);
        return HttpStatus.OK;
    }
}
