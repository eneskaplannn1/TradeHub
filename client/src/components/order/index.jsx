import OrderHead from "./OrderHead";
import OrderFooter from "./OrderFooter";

function Order({ order }) {
  return (
    <div className="orderContainer">
      <OrderHead order={order} />
      <OrderFooter order={order} />
    </div>
  );
}

export default Order;
