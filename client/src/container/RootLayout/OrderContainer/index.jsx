import Order from "../../../components/order/index";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../features/product/productSlice";
import OrderFilter from "../../../UI/order/order-filter";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../services/apiOrders";
import NoProduct from "../../../components/product/no-product";

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
  // console.log(data?.data?.data?.document);

  return (
    <>
      {data.data.data.document.length === 0 ? (
        <NoProduct cart={true} />
      ) : (
        <>
          <OrderFilter />
          {data?.data?.data?.document?.map((order) => {
            return <Order key={order._id} order={order} />;
          })}
        </>
      )}
    </>
  );
}

export default OrderContainer;
