import { useDispatch } from "react-redux";
import Button from "../../UI/button";
import { StyledDeleteItemTemplate } from "../../UI/item";
import { removeProductFromCart } from "../../features/product/productSlice";
import { toast } from "react-hot-toast";

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
