package com.challenger.demo.repositories;

import com.challenger.demo.models.Keyboard;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface KeyboardRepository extends CrudRepository <Keyboard, Long> {
    @Query ("FROM Keyboard k WHERE k.model = ?1 and k.manufacturer = ?2")

//    public Keyboard (String model, String manufacturer);
    public Keyboard createKeyboard(Keyboard keyboard);

}
