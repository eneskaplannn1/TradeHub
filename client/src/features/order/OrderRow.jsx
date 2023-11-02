import OrderFooter from "./OrderFooter";
import OrderHead from "./OrderHead";

function OrderRow({ order }) {
  return (
    <div className="orderContainer">
      <OrderHead order={order} />
      <OrderFooter order={order} />
    </div>
  );
}

export default OrderRow;
