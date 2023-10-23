import { styled } from "styled-components";
import OrderHead from "./OrderHead";
import OrderFooter from "./OrderFooter";

const StyledOrder = styled.div`
  margin-bottom: 2rem;
`;

function Order({ order }) {
  return (
    <StyledOrder>
      <OrderHead order={order} />
      <OrderFooter order={order} />
    </StyledOrder>
  );
}

export default Order;
