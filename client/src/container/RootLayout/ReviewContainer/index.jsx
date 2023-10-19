import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../../services/apiReviews.js";

import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import ProductReview from "../../../components/product-review/index.jsx";

const StyledReviewContainer = styled.main`
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function ReviewContainer() {
  const { data, isLoading } = useQuery({
    queryFn: getReviews,
    queryKey: ["reviews"],
  });

  return (
    <>
      <StyledBoxTemplate>
        <h1>Enes Kaplan's reviews</h1>
      </StyledBoxTemplate>
      <StyledReviewContainer>
        {data?.data?.data?.document?.map((review) => {
          return <ProductReview review={review} key={review._id} />;
        })}
      </StyledReviewContainer>
    </>
  );
}

export default ReviewContainer;
