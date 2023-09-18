import { styled } from "styled-components";
import StyledBoxTemplate from "../box-template.jsx";

const StyledOrderFooter = styled.div`
  padding: 2rem 1rem;

  div {
    display: flex;
    align-items: center;
    padding: 0 1rem;

    justify-content: space-between;
    font-size: 16px;
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;
function OrderFooter() {
  return (
    <StyledBoxTemplate>
      <StyledOrderFooter>
        <StyledBoxTemplate>
          <div>✔️ Teslim Edildi</div>
          <p> 14 Temmuz tarihinde teslim edilmiştir.</p>
          <img src="/product.jpg" />
        </StyledBoxTemplate>
      </StyledOrderFooter>
    </StyledBoxTemplate>
  );
}

export default OrderFooter;
