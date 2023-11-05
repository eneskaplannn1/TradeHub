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
    <Container>
      <h1>Product Reviews</h1>

      {isLoading ? (
        <StyledProductReviews>
          <Skeleton width={920} height={400} key={1} />
          <StyledReviews>
            {Array(5)
              .fill(null)
              .map((_, i) => {
                return <Skeleton width={920} height={100} key={i} />;
              })}
          </StyledReviews>
        </StyledProductReviews>
      ) : (
        <StyledProductReviews>
          {data?.data?.data?.document.length === 0 ? (
            <NoReview
              productData={productData?.ratingsAverage}
              productId={productId}
            />
          ) : (
            <>
              <StyledReviewHead>
                <div className="rating">
                  <span>{productData?.ratingsAverage}</span>
                  <StarRating
                    maxRating={5}
                    width={40}
                    height={40}
                    averageRating={productData?.ratingsAverage}
                    isEditing={false}
                  />
                </div>
                <div>{productData?.ratingsQuantity} Review </div>
                <Modal>
                  <Modal.Open opens="create-review">
                    <Button variation="orange">Add Review</Button>
                  </Modal.Open>
                  <Modal.Window
                    position="marginTop"
                    variation="medium"
                    name="create-review"
                  >
                    <ReviewForm
                      productData={productData}
                      productId={productId}
                    />
                  </Modal.Window>
                </Modal>
              </StyledReviewHead>
              <StyledReviews>
                {data?.data?.data?.document?.map((review) => {
                  return <UserReview key={review?._id} review={review} />;
                })}
              </StyledReviews>
            </>
          )}
        </StyledProductReviews>
      )}
    </Container>
  );
}

export default ProductDetailReviews;

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledProductReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 1px solid var(--color-zinc-200);

  span {
    font-weight: bold;
  }
`;
const StyledReviewHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem;

  border-bottom: 1px solid var(--color-zinc-200);

  .rating {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem 2rem;
`;
