import { styled } from "styled-components";
import OrderDetail from "../features/order/OrderDetail";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function OrderDetailPage() {
  const navigate = useNavigate();
  return (
    <StyledOrderDetail>
      <button onClick={() => navigate(-1)}>
        <BsFillArrowLeftCircleFill />
      </button>
      <h1>Order Detail Page</h1>
      <OrderDetail />
    </StyledOrderDetail>
  );
}

export default OrderDetailPage;

const StyledOrderDetail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    position: absolute;
    top: 10px;
    left: 10px;

    svg {
      transition: 0.4s ease;
      color: var(--color-orange-600);
      width: 50px;
      height: 50px;

      &:hover {
        scale: 1.2;
      }
    }
  }

  h1 {
    text-align: center;
  }

  @media (max-width: 700px) {
    button {
      top: 5px;
      left: -25px;
    }
  }
`;
