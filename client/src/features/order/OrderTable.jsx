import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

import useCheckoutSuccess from "../../hooks/useCheckoutSuccess";

import { styled } from "styled-components";
import OrderFilter from "../../ui/OrderFilter";
import Skeleton from "../../ui/Skeleton";
import OrderRow from "./OrderRow";
import NoProduct from "../../ui/NoProduct";

function OrderTable() {
  const { _id } = useSelector((store) => store.auth.user);

  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(_id),
  });
  useCheckoutSuccess();

  return (
    <>
      {!isLoading && data?.data?.data?.document.length !== 0 && <OrderFilter />}

      <StyledOrder>
        {isLoading ? (
          Array(20)
            .fill(null)
            .map((_, index) => {
              return <Skeleton width={890} height={240} key={index} />;
            })
        ) : data?.data?.data?.document.length === 0 ? (
          <NoProduct order={true} />
        ) : (
          data?.data?.data?.document?.map((order) => {
            return <OrderRow key={order?._id} order={order} />;
          })
        )}
      </StyledOrder>
    </>
  );
}

export default OrderTable;

const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 2500px) and (max-width: 3000px) {
    font-size: 32px;
  }
  @media screen and (min-width: 2200px) and (max-width: 2500px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1900px) and (max-width: 2200px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1700px) and (max-width: 1900px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1500px) and (max-width: 1700px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1500px) {
    font-size: 13px;
  }
  @media screen and (min-width: 600px) and (max-width: 1000px) {
    font-size: 10px;
  }
  /* @media screen and (min-width: 1900px) and (max-width: 2200px) {
    font-size: 22px;
  } */
`;
