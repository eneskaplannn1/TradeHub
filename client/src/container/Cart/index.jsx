import { styled } from "styled-components";
import StyledBoxTemplate from "../../components/box-template.jsx";

const StyledCartContainer = styled.section`
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
`;
const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .item {
    margin: 0.5rem 1.5rem;
  }
`;
const StyledItemHead = styled.div`
  background-color: var(--color-zinc-200);
`;
const StyledItem = styled.div`
  display: flex;
  gap: 0.2rem;
`;

function CartContainer() {
  return (
    <StyledCartContainer>
      <StyledItemWrapper>
        <StyledBoxTemplate className="item">
          <StyledItemHead>
            <div>
              Seller <span> My Home</span>
            </div>
          </StyledItemHead>
          <StyledItem>
            <img />
            <p>Description</p>
            <p>Amount</p>
            <p>Price</p>
            <p>Cancel Item</p>
          </StyledItem>
        </StyledBoxTemplate>
      </StyledItemWrapper>
      <div style={{ backgroundColor: "blue" }}>you</div>
    </StyledCartContainer>
  );
}

export default CartContainer;
