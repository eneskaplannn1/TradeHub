import { styled } from "styled-components";

const StyledProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;

  padding-left: 5rem;
  padding-right: 15rem;
`;

const StyledImageContainer = styled.div`
  height: 500px;
  border: 1px solid var(--color-zinc-200);
  img {
    width: 100%;
    height: 500px;
  }
`;

const StyledProductInfo = styled.div`
  height: fit-content;
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-lg);
  padding: 1rem 0.7rem 2rem;
  span {
    font-weight: bold;
  }
`;

const StyledProductDescription = styled.div`
  font-size: 24px;
  font-weight: 200;
`;

const StyledReviewSummary = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  font-size: 16px;

  .rating {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .hearth {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    &:hover {
      color: var(--color-orange-500);
    }
  }
`;
const StyledProductPrice = styled.div`
  font-size: 3rem;
  padding: 1rem 0.4rem;
  color: var(--color-orange-600);
`;
const StyledButtonContainer = styled.div`
  padding: 0 0.4rem;
  position: relative;
  display: grid;
  grid-template-columns: 8fr 1fr;
  gap: 2rem;
  button {
    height: 50px;
  }
`;

export {
  StyledButtonContainer,
  StyledImageContainer,
  StyledProductDescription,
  StyledProductDetail,
  StyledProductInfo,
  StyledReviewSummary,
  //   StyledProductReviews,
  StyledProductPrice,
};
