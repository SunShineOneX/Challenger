package com.challenger.demo.repositories;

import com.challenger.demo.models.Game;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository <Game, Long> {
    @Query ("FROM Game g WHERE g.title = ?1 AND g.developer = ?2")

    public Game createGame(Game game);
}
