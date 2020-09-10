package com.challenger.demo.controllers;

import com.challenger.demo.models.Game;
import com.challenger.demo.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/games")
public class GameController {

    @Autowired
    GameService gameService;

    // test

    @GetMapping
    public Iterable<Game> findAll() {
        return gameService.listGames();
    }

    @PostMapping
    public Game creatGame(@RequestBody Game game) {
        return gameService.createGame(game);
    }

    @DeleteMapping("/{gameId}")
    public HttpStatus deleteGame(@PathVariable long gameId) {
        return gameService.deleteGame(gameId);
    }
}
