import styled from "styled-components";
import StyledBoxTemplate from "../box-template.jsx";

const StyledProductReview = styled.div`
  padding: 1rem 2rem;
`;
const StyledProductReviewHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  padding: 1rem 0;

  border-bottom: 1px solid var(--color-zinc-200);
`;
const StyledProductReviewFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 1rem;
  padding: 2rem 0 0;

  span {
    font-weight: bold;
  }
  img {
    width: 75px;
    border-radius: 50%;
  }
`;

function ProductReview({ review }) {
  return (
    <StyledBoxTemplate>
      <StyledProductReview>
        <StyledProductReviewHead>
          <div>Image</div>
          <div>Brand</div>
          <div>Review</div>
        </StyledProductReviewHead>
        <StyledProductReviewFooter>
          <img src={`/productImage/${review?.product?.category}.png`} />
          <div>
            <span>{review?.product?.brand} </span>
            {review?.product?.productDesc}
          </div>
          <div>{review?.review}</div>
        </StyledProductReviewFooter>
      </StyledProductReview>
    </StyledBoxTemplate>
  );
}

export default ProductReview;
