import { styled } from "styled-components";
import OrderHead from "./orderHead";
import OrderFooter from "./orderFooter";

const StyledOrder = styled.div`
  margin-bottom: 2rem;
`;

function Order() {
  return (
    <StyledOrder>
      <OrderHead />
      <OrderFooter />
    </StyledOrder>
  );
}

export default Order;
