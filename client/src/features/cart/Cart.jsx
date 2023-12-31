import { useSelector } from "react-redux";
import { styled } from "styled-components";

import NoProduct from "../../ui/NoProduct";

import CartSidebar from "./CartSidebar";
import ProductItemRow from "../product/ProductItemRow";

function Cart() {
  const { cart } = useSelector((store) => store.cart);

  return (
    <StyledCartContainer>
      <StyledItemContainer>
        {cart?.products?.length === 0 ? (
          <NoProduct />
        ) : (
          cart.products.map((product) => {
            return <ProductItemRow key={product.productId} product={product} />;
          })
        )}
      </StyledItemContainer>
      <CartSidebar cart={cart} />
    </StyledCartContainer>
  );
}

export default Cart;

const StyledCartContainer = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;

  @media (max-width: 1250px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
