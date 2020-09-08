package com.challenger.demo.services;

import com.challenger.demo.models.Keyboard;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface KeyboardService {
    public Iterable<Keyboard> listKeyboards();
    public Keyboard createKeyboard(Keyboard keyboard);
    public Keyboard queryKeyboards(String model, String manufacturer);
    public HttpStatus deleteKeyboard(long keyboardId);

}
