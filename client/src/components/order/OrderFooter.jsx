import { styled } from "styled-components";

function OrderFooter({ order }) {
  return (
    <StyledOrderFooter>
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
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
  }
`;
