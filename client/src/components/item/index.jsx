import Counter from "../../UI/counter";
import { BsTrash } from "react-icons/bs";
import {
  StyledItem,
  StyledItemBody,
  StyledItemContainer,
  StyledItemHead,
} from "../../UI/item";
import Modal from "../../UI/modal";

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
            <Modal.Window name="delete-product">
              <h1>hello world</h1>
            </Modal.Window>
          </Modal>
        </StyledItemBody>
      </StyledItem>
    </StyledItemContainer>
  );
}

export default Item;
