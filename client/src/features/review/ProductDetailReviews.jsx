import useGetReviews from "../../hooks/useGetReviews";

import ReviewForm from "../../ui/ReviewForm";
import UserReview from "./UserReview";
import NoReview from "../../ui/NoReview";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import StarRating from "../../ui/StarRating";
import Skeleton from "../../ui/Skeleton";

import { styled } from "styled-components";

function ProductDetailReviews({ productData, productId, isLoading }) {
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

export default ProductDetailReviews;

const StyledProductReviewContainer = styled.div`
  padding-left: 5rem;
  padding-right: 15rem;
`;
const StyledProductReviews = styled.div`
  border: 1px solid var(--color-zinc-200);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-weight: bold;
  }
`;
const StyledReviewHead = styled.div`
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  border-bottom: 1px solid var(--color-zinc-200);

  .rating {
    display: flex;
    gap: 1rem;
  }
`;
const StyledReviews = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
