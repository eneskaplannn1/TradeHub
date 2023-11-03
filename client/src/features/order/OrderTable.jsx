import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

import useCheckoutSuccess from "../../hooks/useCheckoutSuccess";

import { styled } from "styled-components";
import OrderFilter from "../../ui/OrderFilter";
import Skeleton from "../../ui/Skeleton";
import OrderRow from "./OrderRow";

function OrderTable() {
  const { _id } = useSelector((store) => store.auth.user);

  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(_id),
  });
  useCheckoutSuccess();

  return (
    <>
      <OrderFilter />
      <StyledOrder>
        {isLoading
          ? Array(20)
              .fill(null)
              .map((_, index) => {
                return <Skeleton width={890} height={240} key={index} />;
              })
          : data?.data?.data?.document?.map((order) => {
              return <OrderRow key={order?._id} order={order} />;
            })}
      </StyledOrder>
    </>
  );
}

export default OrderTable;

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
