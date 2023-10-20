import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import ProductReview from "../../../components/product-review/index.jsx";
import useGetReviews from "../../../hooks/useGetReviews";
import Skeleton from "../../../components/skeleton/index.jsx";

const StyledReviewContainer = styled.main`
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    text-align: left;
  }
`;

function ReviewContainer() {
  const { data, isLoading, user } = useGetReviews();

  return (
    <>
      <>
        <StyledBoxTemplate>
          <h1>{user?.name}'s reviews</h1>
        </StyledBoxTemplate>
        <StyledReviewContainer>
          {isLoading ? (
            Array(3)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} width={850} height={230} />
              ))
          ) : data?.data?.data?.document.length === 0 ? (
            <h1>You did not rated any product yet</h1>
          ) : (
            data?.data?.data?.document?.map((review) => {
              return <ProductReview review={review} key={review._id} />;
            })
          )}
        </StyledReviewContainer>{" "}
      </>
    </>
  );
}

export default ReviewContainer;
