import { StyledReview } from "../../UI/review";
import StarRating from "../../UI/star";
import formatDate from "../../utils/formatDate";

function UserReview({ review }) {
  //   console.log(review);
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
          | <span style={{ marginLeft: "1rem" }}></span>{" "}
          {formatDate(review.createdAt)}
        </div>
      </div>
    </StyledReview>
  );
}

export default UserReview;
