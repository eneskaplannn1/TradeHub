import { styled } from "styled-components";

import Button from "./Button";
import Modal from "./Modal";
import ReviewForm from "./ReviewForm";

function NoReview({ productData, productId }) {
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
          <ReviewForm productData={productData} productId={productId} />
        </Modal.Window>
      </Modal>
    </StyledNoReview>
  );
}

export default NoReview;

const StyledNoReview = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  gap: 5rem;
  align-items: center;
`;
