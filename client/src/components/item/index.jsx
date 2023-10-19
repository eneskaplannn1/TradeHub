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
import DeleteItem from "../delete-item";

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
