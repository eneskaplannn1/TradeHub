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
import Skeleton from "../skeleton";
import UserReview from "../styled-review";
import NoReview from "./noReview";

function ReviewContainer({ productData, productId, isLoading }) {
  const { data } = useGetReviews(true, productId);

  return (
    <StyledProductReviewContainer>
      <h1>Product Reviews</h1>
      <StyledProductReviews>
        {data?.data?.data?.document.length === 0 ? (
          <NoReview
            productData={productData.ratingsAverage}
            productId={productId}
          />
        ) : (
          <>
            <StyledReviewHead>
              <div className="rating">
                <span>{productData.ratingsAverage}</span>
                <StarRating
                  maxRating={5}
                  width={40}
                  height={40}
                  averageRating={productData.ratingsAverage}
                />
              </div>
              <div>| {productData?.ratingsQuantity} Review </div>
              <Modal>
                <Modal.Open opens="create-review">
                  <Button variation="orange">Add Review</Button>
                </Modal.Open>
                <Modal.Window
                  position="marginTop"
                  variation="medium"
                  name="create-review"
                >
                  <ReviewForm productData={productData} productId={productId} />
                </Modal.Window>
              </Modal>
            </StyledReviewHead>
            <StyledReviews>
              {isLoading
                ? Array(5)
                    .fill(null)
                    .map((_, i) => {
                      return <Skeleton width={920} height={100} key={i} />;
                    })
                : data?.data?.data?.document?.map((review) => {
                    return <UserReview key={review?._id} review={review} />;
                  })}
            </StyledReviews>
          </>
        )}
      </StyledProductReviews>
    </StyledProductReviewContainer>
  );
}

export default ReviewContainer;
