import useGetReviews from "../../hooks/useGetReviews";

import { styled } from "styled-components";
import StyledBoxTemplate from "../../ui/BoxTemplate.jsx";
import UserProductReviewRow from "./ProductReviewRow.jsx";
import Skeleton from "../../ui/Skeleton.jsx";

function UserProductReviews() {
  const { data, isLoading, user } = useGetReviews();

  return (
    <>
      <StyledBoxTemplate>
        <h1>{user?.name + "'s"} reviews</h1>
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
            return <UserProductReviewRow review={review} key={review._id} />;
          })
        )}
      </StyledReviewContainer>
    </>
  );
}

export default UserProductReviews;

const StyledReviewContainer = styled.main`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (min-width: 2500px) and (max-width: 3000px) {
    font-size: 34px;
    img {
      width: 200px;
    }
  }
  @media screen and (min-width: 1900px) and (max-width: 2500px) {
    font-size: 28px;
    img {
      width: 150px;
    }
  }
  @media screen and (min-width: 1600px) and (max-width: 1900px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;
