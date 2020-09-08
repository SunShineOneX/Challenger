package com.challenger.demo.controllers;
import com.challenger.demo.models.Review;
import com.challenger.demo.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/reviews")
public class ReviewController {
    @Autowired
    ReviewService reviewService;

    @GetMapping
    public Iterable<Review> findAll() {
        return reviewService.listReviews();
    }

    @PostMapping
    public Review createReview(@RequestBody Review reviewParam) {
        return reviewService.createReview(reviewParam);
    }

    @DeleteMapping("/{reviewId}")
    public HttpStatus deleteReview(@PathVariable long reviewId) {
        return reviewService.deleteReview(reviewId);
    }

//    @GetMapping("/reviews/list")

}
