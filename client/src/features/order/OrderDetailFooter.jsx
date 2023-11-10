import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function OrderDetailFooter({ product }) {
  return (
    <StyledOrderDetailFooter>
      <NavLink to={`/product/${product?.product?._id}`}></NavLink>
      <div className="image">
        <img
          key={product?.product?._id}
          src={`/productImage/${product?.product?.category}.png`}
        />
      </div>
      <div> {product?.product?.brand} </div>
      <p>{product?.product?.productDesc} </p>
    </StyledOrderDetailFooter>
  );
}

export default OrderDetailFooter;

const StyledOrderDetailFooter = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  font-size: 16px;
  padding: 1rem 3rem;
  border-bottom: 1px solid var(--color-zinc-200);

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .image {
    position: relative;
    display: flex;

    img {
      margin: 0 -12px;
      width: 90px;
      height: 90px;
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
