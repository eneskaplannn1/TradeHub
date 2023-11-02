import Counter from "../../UI/Counter";
import { BsTrash } from "react-icons/bs";

import Modal from "../../UI/Modal";
import DeleteItem from "../delete-item";
import { styled } from "styled-components";

function Item({ product }) {
  return (
    <StyledItemContainer>
      <StyledItem>
        <StyledItemHead>
          <div>
            Seller:
            <span>{product?.brand}</span>
          </div>
        </StyledItemHead>
        <StyledItemBody>
          <img loading="lazy" src={`/productImage/${product?.category}.png`} />
          <div className="product">
            <span>{product?.brand}</span> {product?.productDesc}
          </div>
          <Counter quantity={product?.quantity} product={product} />
          <div className="price">
            {(product?.price * product?.quantity).toFixed(0)} $
          </div>
          <Modal>
            <Modal.Open opens="delete-product">
              <button>
                <BsTrash />
              </button>
            </Modal.Open>
            <Modal.Window variation="small" name="delete-product">
              <DeleteItem product={product} />
            </Modal.Window>
          </Modal>
        </StyledItemBody>
      </StyledItem>
    </StyledItemContainer>
  );
}

export default Item;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledItem = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-lg);
`;

const StyledItemHead = styled.div`
  background-color: var(--color-zinc-50);
  padding: 1rem;

  border-bottom: 1px solid var(--color-zinc-200);

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-zinc-700);
  }

  span {
    font-size: 16px;
    color: var(--color-zinc-600);
  }
`;

const StyledItemBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 0.5fr;
  align-items: center;

  gap: 0.5rem;
  padding: 1rem;

  img {
    width: 6rem;
  }

  .product {
    font-size: 18px;
    color: var(--color-zinc-500);

    span {
      color: var(--color-zinc-900);
      font-weight: bold;
    }
  }
  .price {
    text-align: center;
    font-size: 21px;
    color: var(--color-orange-900);
  }

  svg {
    cursor: pointer;
    margin: auto;

    &:hover {
      color: var(--color-orange-500);
    }
  }
`;
