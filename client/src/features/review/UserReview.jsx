import { styled } from "styled-components";
import StarRating from "../../ui/StarRating";
import formatDate from "../../utils/formatDate";

function UserReview({ review }) {
  return (
    <StyledReview>
      <div className="header">
        <StarRating
          height={32}
          width={32}
          isEditing={false}
          averageRating={review?.rating}
          maxRating={5}
        />
        <div>{review?.review}</div>
      </div>
      <div className="footer">
        <div>{review?.customer?.name}</div>
        <div>
          | <span style={{ marginLeft: "1rem" }}></span>
          {formatDate(review.createdAt)}
        </div>
      </div>
    </StyledReview>
  );
}

export default UserReview;

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .header {
    font-size: 22px;
    color: var(--color-zinc-700);
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
  }
  .footer {
    display: flex;
    gap: 2rem;

    font-size: 22px;
    color: var(--color-zinc-500);
  }

  @media (max-width: 700px) {
    .header {
      flex-direction: column;
      align-items: baseline;
      font-size: 16px;
      row-gap: 0.4rem;
    }
    .footer {
      font-size: 16px;
    }
  }
`;
