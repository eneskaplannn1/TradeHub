import Order from "../../../components/order/index";
import { useSelector } from "react-redux";
import OrderFilter from "../../../UI/order/order-filter";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../services/apiOrders";
import StyledOrder from "../../../UI/order";
import { useState } from "react";
import useCheckoutSuccess from "../../../hooks/useCheckoutSuccess";
import Skeleton from "../../../components/skeleton";

function OrderContainer() {
  const [selectedFilter, setSelectedFilter] = useState(); // Initialize the selected filter state

  const handleFilterChange = (selectedValue) => {
    setSelectedFilter(selectedValue);
  };

  const { _id } = useSelector((store) => store.auth.user);

  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(_id),
  });

  useCheckoutSuccess();

  return (
    <div style={{ padding: "1rem" }}>
      <OrderFilter onFilterChange={handleFilterChange} />
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
