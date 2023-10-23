import { styled } from "styled-components";
import checkOrderStatus from "../../utils/checkOrderStatus";
import formatDate from "../../utils/formatDate";

function OrderFooter({ order }) {
  const isOrderDelivered = checkOrderStatus(order?.createdAt);

  return (
    <StyledOrderFooter>
      <div>
        {isOrderDelivered
          ? "✅ Delivered"
          : "⏳ Your order is being prepared..."}
      </div>
      <p>
        {isOrderDelivered
          ? `Delivered on ${formatDate(order?.createdAt, 3)}.`
          : `Your order will be delivered on  ${formatDate(
              order?.createdAt,
              3
            )}`}
      </p>
      <div className="image">
        {order?.products?.map((product) => {
          return (
            <img
              key={product._id}
              src={`/productImage/${product?.product?.category}.png`}
            />
          );
        })}
      </div>
    </StyledOrderFooter>
  );
}

export default OrderFooter;

const StyledOrderFooter = styled.div`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  padding: 1rem;

  justify-content: space-between;
  font-size: 16px;
  .image {
    position: relative;
    display: flex;

    img {
      margin: 0 -12px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
`;
