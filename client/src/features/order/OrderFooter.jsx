import checkOrderStatus from "../../utils/checkOrderStatus";
import formatDate from "../../utils/formatDate";

import { styled } from "styled-components";

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
        {order?.products?.slice(0, 4).map((product) => {
          return (
            <img
              key={product._id}
              src={`/productImage/${product?.product?.photo}`}
            />
          );
        })}
      </div>
    </StyledOrderFooter>
  );
}

export default OrderFooter;

const StyledOrderFooter = styled.div`
  padding: 2rem 1rem;

  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.8fr;
  align-items: center;
  padding: 1rem;

  font-size: 16px;
  .image {
    position: relative;
    justify-self: center;
    position: relative;
    display: flex;

    img {
      margin: 0 -10px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
    .image {
      display: none;
    }
  }
`;
