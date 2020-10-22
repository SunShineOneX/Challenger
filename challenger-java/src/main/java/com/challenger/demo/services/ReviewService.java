package com.challenger.demo.services;

import com.challenger.demo.models.Review;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    public Iterable<Review> listReviews();
    public Review createReview(Review review);
    public HttpStatus deleteReview(long reviewId);
    public Review queryReviews(String title, String developer);
    public Review updateReview(Review review);
}
