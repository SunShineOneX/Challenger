package com.challenger.demo.services;

import com.challenger.demo.models.Review;
import com.challenger.demo.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public Iterable<Review> listReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public Review updateReview(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public HttpStatus deleteReview(long reviewId) {
        reviewRepository.deleteById(reviewId);
        return HttpStatus.OK;
    }

    @Override
    public Review queryReviews(String title, String developer) {
        return null;
    }

}
