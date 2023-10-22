import { styled } from "styled-components";
import { StyledItemContainer } from "../../UI/item";
// import Item from "../../components/item";
import ItemSidebar from "../../components/item-sidebar";
import Item from "../../components/item";
import { useSelector } from "react-redux";
import NoProduct from "../../components/product/no-product";

const StyledCartContainer = styled.section`
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
`;

function CartContainer() {
  const { cart } = useSelector((store) => store.cart);

  return (
    <StyledCartContainer>
      <StyledItemContainer>
        {cart?.products?.length === 0 ? (
          <NoProduct />
        ) : (
          cart.products.map((product) => {
            return <Item key={product.productId} product={product} />;
          })
        )}
      </StyledItemContainer>
      <ItemSidebar cart={cart} />
    </StyledCartContainer>
  );
}

export default CartContainer;
