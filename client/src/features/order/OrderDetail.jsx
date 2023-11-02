import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/apiOrders";

import { styled } from "styled-components";
import OrderDetailHead from "../../components/order/OrderDetailHead";
import OrderDetailFooter from "../../components/order/OrderDetailFooter";

function OrderDetail() {
  const { orderDetail: orderId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["orders", orderId],
    queryFn: () => getOrder(orderId),
  });

  //! handle is loading state

  return (
    <StyledContainer>
      <OrderDetailHead order={data?.data?.data?.doc || {}} />
      {data?.data?.data?.doc?.products?.map((product) => {
        return <OrderDetailFooter key={product._id} product={product} />;
      })}
    </StyledContainer>
  );
}

export default OrderDetail;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--color-zinc-200);
  border-radius: 6px;
`;
