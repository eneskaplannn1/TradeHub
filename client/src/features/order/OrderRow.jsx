import { styled } from "styled-components";
import OrderFooter from "./OrderFooter";
import OrderHead from "./OrderHead";

function OrderRow({ order }) {
  return (
    <StyledOrderRow>
      <OrderHead order={order} />
      <OrderFooter order={order} />
    </StyledOrderRow>
  );
}

export default OrderRow;

const StyledOrderRow = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
`;
