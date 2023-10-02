const express = require("express");
const ReviewController = require("./../controllers/reviewController");
const reviewRouter = express.Router();

// get all reviews of spesific product-seller

reviewRouter
  .route("/")
  .get(ReviewController.getAllReviews)
  .post(ReviewController.createReview);

reviewRouter
  .route("/:id")
  .get(ReviewController.getReview)
  .patch(ReviewController.updateReview)
  .delete(ReviewController.deleteReview);

module.exports = reviewRouter;
