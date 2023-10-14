import { styled } from "styled-components";

const StyledProductReviewContainer = styled.div`
  padding-left: 5rem;
  padding-right: 15rem;
`;
const StyledProductReviews = styled.div`
  border: 1px solid var(--color-zinc-200);

  span {
    font-weight: bold;
  }
`;
const StyledReviewHead = styled.div`
  padding: 3rem 2rem;
  display: flex;
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
const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  .header {
    font-size: 22px;
    color: var(--color-zinc-700);
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  .footer {
    display: flex;
    gap: 2rem;

    font-size: 22px;
    color: var(--color-zinc-500);
  }
`;
export {
  StyledProductReviewContainer,
  StyledReview,
  StyledReviews,
  StyledReviewHead,
  StyledProductReviews,
};
