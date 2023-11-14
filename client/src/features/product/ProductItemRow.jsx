import Counter from "../../ui/Counter";
import Modal from "../../ui/Modal";

import { BsTrash } from "react-icons/bs";

import { styled } from "styled-components";
import DeleteItem from "../../ui/DeleteItem";

function ProductItemRow({ product }) {
  console.log(product);
  return (
    <StyledItem>
      <StyledItemHead>
        Seller:
        <span>{product?.brand}</span>
      </StyledItemHead>
      <StyledItemBody>
        <img loading="lazy" src={`/productImage/${product?.photo}`} />
        <div className="product">
          <span>{product?.brand}</span> {product?.productDesc}
        </div>
        <Counter quantity={product?.quantity} product={product} />
        <div className="price">
          {(product?.price * product?.quantity).toFixed(2)} $
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
  );
}

export default ProductItemRow;

const StyledItem = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-lg);
`;

const StyledItemHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: var(--color-zinc-50);
  color: var(--color-zinc-700);
  padding: 1rem;

  border-bottom: 1px solid var(--color-zinc-200);

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

    &:hover {
      color: var(--color-orange-500);
    }
  }

  @media (max-width: 1200px) {
    .product {
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    .price {
      justify-self: start;
    }
    button {
      justify-self: center;
    }
    text-align: left;
    gap: 1rem;
    img {
      display: none;
    }
  }
`;
