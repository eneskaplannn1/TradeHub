import { styled } from "styled-components";

const StyledItemSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-zinc-100);
`;

const StyledOrderSummary = styled.div``;

function ItemSidebar() {
  return (
    <StyledItemSidebar>
      <StyledOrderSummary>fuck</StyledOrderSummary>
      you
    </StyledItemSidebar>
  );
}

export default ItemSidebar;
