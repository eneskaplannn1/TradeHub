import Counter from "../../UI/counter";
import { BsTrash } from "react-icons/bs";
import {
  StyledDeleteItemTemplate,
  StyledItem,
  StyledItemBody,
  StyledItemContainer,
  StyledItemHead,
} from "../../UI/item";
import Modal from "../../UI/modal";
import Button from "../../UI/button";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../features/product/productSlice";
import { toast } from "react-hot-toast";

function Item({ product }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = function () {
    dispatch(removeProductFromCart({ product, all: true }));
    toast.success("Product removed from cart");
  };

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
              <StyledDeleteItemTemplate>
                <div className="info">
                  Are you sure you wanna delete all the
                  <span> {product.productDesc}</span>
                </div>
                <div className="container">
                  <Button variation="red">Cancel</Button>
                  <Button variation="green" onClick={handleDeleteProduct}>
                    Delete all
                  </Button>
                </div>
              </StyledDeleteItemTemplate>
            </Modal.Window>
          </Modal>
        </StyledItemBody>
      </StyledItem>
    </StyledItemContainer>
  );
}

export default Item;
