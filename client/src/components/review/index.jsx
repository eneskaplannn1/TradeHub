import Button from "../../UI/button";
import Modal from "../../UI/modal";
import {
  StyledProductReviewContainer,
  StyledProductReviews,
  StyledReviewHead,
  StyledReviews,
} from "../../UI/review";
import ReviewForm from "../../UI/review-form";
import StarRating from "../../UI/star";
import useGetReviews from "../../hooks/useGetReviews";
import UserReview from "../styled-review";

function ReviewContainer({ productData, productId }) {
  const { data } = useGetReviews(true, productId);
  const { ratingsAverage, ratingsQuantity } = productData;

  return (
    <StyledProductReviewContainer>
      <h1>Product Reviews</h1>
      <StyledProductReviews>
        <StyledReviewHead>
          <div className="rating">
            <span>{ratingsAverage}</span>
            <StarRating
              maxRating={5}
              width={40}
              height={40}
              averageRating={ratingsAverage}
            />
          </div>
          <div>| {ratingsQuantity} Review </div>
          <Modal>
            <Modal.Open opens="create-review">
              <Button variation="orange">Add Review</Button>
            </Modal.Open>
            <Modal.Window
              position="marginTop"
              variation="medium"
              name="create-review"
            >
              <ReviewForm productData={productData} />
            </Modal.Window>
          </Modal>
        </StyledReviewHead>
        <StyledReviews>
          {data?.data?.data?.document?.map((review) => {
            return <UserReview key={review?._id} review={review} />;
          })}
        </StyledReviews>
      </StyledProductReviews>
    </StyledProductReviewContainer>
  );
}

export default ReviewContainer;
