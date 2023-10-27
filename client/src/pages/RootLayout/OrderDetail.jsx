import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/apiOrders";

import { styled } from "styled-components";
import OrderDetailHead from "../../components/order/OrderDetailHead";
import OrderDetailFooter from "../../components/order/OrderDetailFooter";

// orderdaki her bir ürün için

function OrderDetail() {
  const { orderDetail: orderId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["orders", orderId],
    queryFn: () => getOrder(orderId),
  });

  return (
    <StyledOrderDetail>
      <h1>Order Detail Page</h1>
      <div className="container">
        <OrderDetailHead order={data?.data?.data?.doc || {}} />
        {data?.data?.data?.doc?.products?.map((product) => {
          return <OrderDetailFooter key={product._id} product={product} />;
        })}
      </div>
    </StyledOrderDetail>
  );
}

export default OrderDetail;

const StyledOrderDetail = styled.div`
  padding: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--color-zinc-200);
    border-radius: 6px;
  }
`;
