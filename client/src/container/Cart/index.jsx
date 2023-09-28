import { styled } from "styled-components";
import { StyledItemContainer } from "../../UI/item";
import Item from "../../components/item";
import ItemSidebar from "../../components/item-sidebar";

const StyledCartContainer = styled.section`
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
`;

function CartContainer() {
  return (
    <StyledCartContainer>
      <StyledItemContainer>
        {/* <Item />
        <Item />
        <Item /> */}
      </StyledItemContainer>
      <ItemSidebar />
    </StyledCartContainer>
  );
}

export default CartContainer;
