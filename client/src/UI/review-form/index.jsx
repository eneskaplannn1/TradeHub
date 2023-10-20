import { styled } from "styled-components";
import Button from "../button";
import StarRating from "../star";
import useCreateReviews from "../../hooks/useCreateReviews";

const StyledReviewFormContainer = styled.div`
  color: black;
  padding: 1rem 2rem;

  span {
    color: var(--color-zinc-500);
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    input {
      width: 100%;
      padding: 1rem;
      outline: none;
      border: none;

      border: 1px solid var(--color-zinc-300);
      border-radius: 12px;
    }
  }

  .button-container {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

function ReviewForm({ productData, onCloseModal }) {
  const { handleSubmit, handleSubmitForm, handleRating, register } =
    useCreateReviews({ productData, onCloseModal });

  return (
    <StyledReviewFormContainer>
      <h3>
        Make a review about <span>{productData.productDesc}</span>{" "}
      </h3>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="review">Review</label>
        <input id="review" type="text" {...register("review")} />
        <h3>Rate the product</h3>
        <StarRating
          maxRating={5}
          width={80}
          height={80}
          isEditing={true}
          handleRating={handleRating}
        />
        <div className="button-container">
          <Button variation="red" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button variation="green">Confirm</Button>
        </div>
      </form>
    </StyledReviewFormContainer>
  );
}

export default ReviewForm;
