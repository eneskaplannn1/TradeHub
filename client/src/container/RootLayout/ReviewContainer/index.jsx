import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import ProductReview from "../../../components/product-review/index.jsx";

const StyledReviewContainer = styled.main`
  padding: 2rem 0;
`;

function ReviewContainer() {
  return (
    <StyledBoxTemplate>
      <StyledBoxTemplate>
        <h1>Enes Kaplan's reviews</h1>
      </StyledBoxTemplate>
      <StyledReviewContainer>
        <ProductReview />
        <ProductReview />
        <ProductReview />
        <ProductReview />
      </StyledReviewContainer>
    </StyledBoxTemplate>
  );
}

export default ReviewContainer;
