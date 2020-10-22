package com.challenger.demo.services;

import com.challenger.demo.models.Game;
import com.challenger.demo.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class GameServiceImpl implements GameService{
    @Autowired
    private GameRepository gameRepository;

    @Override
    public Iterable<Game> listGames() {
        return gameRepository.findAll();
    }

    @Override
    public Game createGame(Game game) {
        return gameRepository.save(game);
    }

    @Override
    public Game queryGames(String title, String developer) {
        return null;
    }

    @Override
    public HttpStatus deleteGame(long gameId) {
        gameRepository.deleteById(gameId);
        return HttpStatus.OK;
    }

}
