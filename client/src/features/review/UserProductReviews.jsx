import useGetReviews from "../../../hooks/useGetReviews.js";

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
      <UserProductReviews>
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
      </UserProductReviews>
    </>
  );
}

export default UsersReviews;

const StyledReviewContainer = styled.main`
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    text-align: left;
  }
`;
