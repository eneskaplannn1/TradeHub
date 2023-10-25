import Order from "../../../components/order/index";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../features/product/productSlice";
import OrderFilter from "../../../UI/order/order-filter";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../services/apiOrders";
import StyledOrder from "../../../UI/order";
import { useState } from "react";

function OrderContainer() {
  const [selectedFilter, setSelectedFilter] = useState(); // Initialize the selected filter state

  const handleFilterChange = (selectedValue) => {
    console.log(selectedValue);
    setSelectedFilter(selectedValue);
  };

  const { _id } = useSelector((store) => store.auth.user);
  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders({ customerId: _id, filter: selectedFilter }),
  });

  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const checkoutSuccess = urlParams.get("checkoutSuccess");
  if (checkoutSuccess) {
    dispatch(clearCart());
  }

  return (
    <div style={{ padding: "1rem" }}>
      <OrderFilter onFilterChange={handleFilterChange} />
      <StyledOrder>
        {data?.data?.data?.document?.map((order) => {
          return <Order key={order?._id} order={order} />;
        })}
      </StyledOrder>
    </div>
  );
}

export default OrderContainer;
