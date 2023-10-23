import { styled } from "styled-components";
import StyledBoxTemplate from "../box-template.jsx";

function OrderFooter({ order }) {
  return (
    <StyledBoxTemplate>
      <StyledOrderFooter>
        <StyledBoxTemplate className="template">
          <div>✔️ Teslim Edildi</div>
          <p> 14 Temmuz tarihinde teslim edilmiştir.</p>
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
        </StyledBoxTemplate>
      </StyledOrderFooter>
    </StyledBoxTemplate>
  );
}

export default OrderFooter;

const StyledOrderFooter = styled.div`
  width: 100%;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-zinc-100);
  padding: 2rem 1rem;

  .template {
    display: flex;
    align-items: center;
    padding: 1rem;

    justify-content: space-between;
    font-size: 16px;
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
`;
