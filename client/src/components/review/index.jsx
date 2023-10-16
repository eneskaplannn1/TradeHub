import {
  StyledProductReviewContainer,
  StyledProductReviews,
  StyledReview,
  StyledReviewHead,
  StyledReviews,
} from "../../UI/review";
import StarRating from "../../UI/star";

function ReviewContainer({ productData }) {
  const { ratingsAverage, ratingsQuantity } = productData;
  return (
    <StyledProductReviewContainer>
      <h1>Product Reviews</h1>
      <StyledProductReviews>
        <StyledReviewHead>
          <div className="rating">
            <span>{ratingsAverage}</span>
            <StarRating
              maxRating={5}
              width={40}
              height={40}
              averageRating={ratingsAverage}
            />
          </div>
          <div>| {ratingsQuantity} Review </div>
        </StyledReviewHead>
        <StyledReviews>
          <StyledReview>
            <div className="header">
              <StarRating
                height={32}
                width={32}
                isEditing={false}
                averageRating={4}
                maxRating={5}
              />
              <div>Best Product Ever</div>
            </div>
            <div className="footer">
              <div>Enes Kaplan</div>
              <div>
                | <span style={{ marginLeft: "1rem" }}></span> 24 October 2022
              </div>
            </div>
          </StyledReview>
          <StyledReview>
            <div className="header">
              <StarRating
                height={32}
                width={32}
                isEditing={false}
                averageRating={4}
                maxRating={5}
              />
              <div>Best Product Ever</div>
            </div>
            <div className="footer">
              <div>Enes Kaplan</div>
              <div>
                | <span style={{ marginLeft: "1rem" }}></span> 24 October 2022
              </div>
            </div>
          </StyledReview>
          <StyledReview>
            <div className="header">
              <StarRating
                height={32}
                width={32}
                isEditing={false}
                averageRating={4}
                maxRating={5}
              />
              <div>Best Product Ever</div>
            </div>
            <div className="footer">
              <div>Enes Kaplan</div>
              <div>
                | <span style={{ marginLeft: "1rem" }}></span> 24 October 2022
              </div>
            </div>
          </StyledReview>
        </StyledReviews>
      </StyledProductReviews>
    </StyledProductReviewContainer>
  );
}

export default ReviewContainer;
