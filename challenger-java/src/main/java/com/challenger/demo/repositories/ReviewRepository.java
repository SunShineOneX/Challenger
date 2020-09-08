package com.challenger.demo.repositories;

import com.challenger.demo.models.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review, Long> {
    @Query("FROM Review r WHERE r.title =?1 and r.developer =?2")

    public Review createReview(Review review);
}
