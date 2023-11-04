import styled from "styled-components";
import { NavLink } from "react-router-dom";

function UserProductReviewRow({ review }) {
  return (
    <>
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
        <NavLink to={`/product/${review?.product?._id}`}></NavLink>
      </StyledProductReview>
    </>
  );
}

export default UserProductReviewRow;

const StyledProductReview = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
  padding: 1rem 2rem;
  position: relative;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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

  padding: 2rem 0 0;
  gap: 0.4rem;

  span {
    font-weight: bold;
  }
  img {
    width: 75px;
    border-radius: 50%;
  }
`;
