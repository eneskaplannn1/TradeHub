import Order from "../../../components/order/index";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../features/product/productSlice";
import OrderFilter from "../../../UI/order/order-filter";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../services/apiOrders";
import NoProduct from "../../../components/product/no-product";
import Skeleton from "../../../components/skeleton";
import StyledOrder from "../../../UI/order";

function OrderContainer() {
  const { _id } = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();

  const urlParams = new URLSearchParams(window.location.search);
  const checkoutSuccess = urlParams.get("checkoutSuccess");
  if (checkoutSuccess) {
    dispatch(clearCart());
  }

  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(_id),
  });

  return (
    <div style={{ padding: "1rem" }}>
      {data?.data?.data?.document.length === 0 && <NoProduct cart={true} />}
      <>
        {isLoading ? (
          <Skeleton width={930} height={700} />
        ) : (
          <>
            <OrderFilter />
            <StyledOrder>
              {data?.data?.data?.document?.map((order) => {
                return <Order key={order?._id} order={order} />;
              })}
            </StyledOrder>
          </>
        )}
      </>
    </div>
  );
}

export default OrderContainer;
