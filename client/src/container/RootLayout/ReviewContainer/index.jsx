import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import ProductReview from "../../../components/product-review/index.jsx";
import useGetReviews from "../../../hooks/useGetReviews";

const StyledReviewContainer = styled.main`
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    text-align: left;
  }
`;

function ReviewContainer() {
  const { data, isLoading, user } = useGetReviews();

  return (
    <>
      <StyledBoxTemplate>
        <h1>{user?.name}'s reviews</h1>
      </StyledBoxTemplate>
      <StyledReviewContainer>
        {data?.data?.data?.document.length === 0 ? (
          <h1>You did not rated any product yet</h1>
        ) : (
          data?.data?.data?.document?.map((review) => {
            return <ProductReview review={review} key={review._id} />;
          })
        )}
      </StyledReviewContainer>
    </>
  );
}

export default ReviewContainer;
