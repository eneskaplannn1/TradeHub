import { styled } from "styled-components";

function OrderDetailFooter({ product }) {
  return (
    <StyledOrderDetailFooter>
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
  border-bottom: 1px solid var(--color-zinc-200);

  width: 100%;
  padding: 1rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;

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
`;
