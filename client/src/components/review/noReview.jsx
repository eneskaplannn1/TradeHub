import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../UI/button";
import Modal from "../../UI/modal";
import ReviewForm from "../../UI/review-form";

const StyledNoReview = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  gap: 5rem;
  align-items: center;
`;

function NoReview({ productData }) {
  return (
    <StyledNoReview>
      <div>This product has no review </div>
      <Modal>
        <Modal.Open opens="create-review">
          <Button variation="orange">Add Review</Button>
        </Modal.Open>
        <Modal.Window
          position="marginTop"
          variation="medium"
          name="create-review"
        >
          <ReviewForm productData={productData} />
        </Modal.Window>
      </Modal>
    </StyledNoReview>
  );
}

export default NoReview;
