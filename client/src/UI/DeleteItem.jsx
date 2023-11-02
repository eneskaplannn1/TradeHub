import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../features/product/productSlice";
import { toast } from "react-hot-toast";
import { styled } from "styled-components";
import Button from "./Button";

function DeleteItem({ onCloseModal, product }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = function () {
    dispatch(removeProductFromCart({ product, all: true }));
    toast.success("Product removed from cart");
  };
  return (
    <StyledDeleteItemTemplate>
      <div className="info">
        Are you sure you wanna delete all the
        <span> {product.productDesc}</span>
      </div>
      <div className="container">
        <Button variation="red" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="green" onClick={handleDeleteProduct}>
          Delete all
        </Button>
      </div>
    </StyledDeleteItemTemplate>
  );
}

export default DeleteItem;

const StyledDeleteItemTemplate = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    color: var(--color-orange-800);
  }
  .container {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
  }
`;
