import Counter from "../../UI/counter";
import { BsTrash } from "react-icons/bs";
import {
  StyledItem,
  StyledItemBody,
  StyledItemContainer,
  StyledItemHead,
} from "../../UI/item";

function Item() {
  return (
    <StyledItemContainer>
      <StyledItem>
        <StyledItemHead>
          <div>
            Seller:
            <span>Anker</span>
          </div>
        </StyledItemHead>
        <StyledItemBody>
          <img src="/product.jpg" />
          <div className="product">
            <span>Anker</span> SoundCore Space Q45 Kulak Üstü Bluetooth Kulaklık
          </div>
          <Counter />
          <div className="price">2000TL</div>
          <BsTrash />
        </StyledItemBody>
      </StyledItem>
    </StyledItemContainer>
  );
}

export default Item;
