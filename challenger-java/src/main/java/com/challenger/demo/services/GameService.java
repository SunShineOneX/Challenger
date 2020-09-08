package com.challenger.demo.services;

import com.challenger.demo.models.Game;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface GameService {
    public Iterable<Game> listGames();
    public Game createGame(Game game);
    public Game queryGames(String title, String developer);
    public HttpStatus deleteGame(long gameId);
}
