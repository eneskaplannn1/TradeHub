import { styled } from "styled-components";
import Button from "../../UI/button";
import { useMutation } from "@tanstack/react-query";
import { handleOrder } from "../../services/apiOrders";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/product/productSlice";

const StyledItemSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledOrderSummary = styled.div`
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-zinc-100);

  padding: 0.6rem 0.9rem;
`;

const StyledSummaryHeader = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const StyledSummaryBody = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-zinc-100);
  font-size: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .discount {
      color: var(--color-orange-500);
    }
    .number {
      font-weight: bold;
    }
  }
`;

const StyledSummaryFooter = styled.div`
  color: var(--color-orange-500);
  font-size: 1rem;
  padding-top: 0.5rem;
  text-align: end;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function ItemSidebar({ cart }) {
  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.auth.user);
  const { mutate, isLoading } = useMutation({
    mutationFn: handleOrder,
    mutationKey: ["handleOrder"],
  });

  const handlePaymentSession = function () {
    // console.log(cart);
    mutate(
      { cart, customerId: _id }
      // {
      //   onSuccess: () => {
      //     dispatch(clearCart());
      //   },
      // }
    );
  };
  return (
    <StyledItemSidebar>
      <StyledOrderSummary>
        <StyledSummaryHeader>Order Summary</StyledSummaryHeader>
        <StyledSummaryBody>
          <div>
            <div>Sum of Products</div>
            <div className="number">
              {cart.totalPrice ? Math.abs(cart.totalPrice.toFixed(0)) : 0}$
            </div>
          </div>
          <div>
            <div>Cargo charge </div>
            <div className="number">0$</div>
          </div>
          <div>
            <div>Discount</div>
            <div className="discount number">0$</div>
          </div>
        </StyledSummaryBody>
        <StyledSummaryFooter>
          <div>Total Price</div>
          {cart.totalPrice ? Math.abs(cart.totalPrice.toFixed(0)) : 0}$
        </StyledSummaryFooter>
      </StyledOrderSummary>
      <Button onClick={() => handlePaymentSession()} variation="orange">
        {isLoading ? "Processing checkout.." : "Proceed to checkout"}
      </Button>
    </StyledItemSidebar>
  );
}

export default ItemSidebar;
