import { styled } from "styled-components";
import OrderDetail from "../features/order/OrderDetail";

function OrderDetailPage() {
  return (
    <StyledOrderDetail>
      <h1>Order Detail Page</h1>
      <OrderDetail />
    </StyledOrderDetail>
  );
}

export default OrderDetailPage;

const StyledOrderDetail = styled.div`
  padding: 1rem;
`;
