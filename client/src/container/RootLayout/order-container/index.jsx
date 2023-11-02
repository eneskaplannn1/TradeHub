import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../services/apiOrders";
import useCheckoutSuccess from "../../../hooks/useCheckoutSuccess";

import { styled } from "styled-components";
import Order from "../../../components/order/index";
import OrderFilter from "../../../UI/order/order-filter";
import Skeleton from "../../../components/skeleton";

function OrderContainer() {
  const { _id } = useSelector((store) => store.auth.user);

  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(_id),
  });
  useCheckoutSuccess();

  return (
    <div style={{ padding: "1rem" }}>
      <OrderFilter />
      <StyledOrder>
        {isLoading
          ? Array(20)
              .fill(null)
              .map((_, index) => {
                return <Skeleton width={890} height={240} key={index} />;
              })
          : data?.data?.data?.document?.map((order) => {
              return <Order key={order?._id} order={order} />;
            })}
      </StyledOrder>
    </div>
  );
}

export default OrderContainer;

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .orderContainer {
    border: 1px solid var(--color-zinc-200);
    border-radius: 8px;
  }
`;
