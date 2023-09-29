import { styled } from "styled-components";
import Button from "../../UI/button";

const StyledItemSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledOrderSummary = styled.div`
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-zinc-100);

  padding: 0.6rem 0.9rem;
`;

const StyledSummaryHeader = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const StyledSummaryBody = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-zinc-100);
  font-size: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .discount {
      color: var(--color-orange-500);
    }
    .number {
      font-weight: bold;
    }
  }
`;

const StyledSummaryFooter = styled.div`
  color: var(--color-orange-500);
  font-size: 1rem;
  padding-top: 0.5rem;
  text-align: end;
  font-weight: bold;
`;

function ItemSidebar() {
  return (
    <StyledItemSidebar>
      <StyledOrderSummary>
        <StyledSummaryHeader>Order Summary</StyledSummaryHeader>
        <StyledSummaryBody>
          <div>
            <div>Sum of Products</div>
            <div className="number">2000TL</div>
          </div>
          <div>
            <div>Cargo charge </div>
            <div className="number">50TL</div>
          </div>
          <div>
            <div>Discount</div>
            <div className="discount number">120TL</div>
          </div>
        </StyledSummaryBody>
        <StyledSummaryFooter>1.524,75 TL</StyledSummaryFooter>
      </StyledOrderSummary>
      <Button variation="orange">Proceed to checkout</Button>
    </StyledItemSidebar>
  );
}

export default ItemSidebar;
