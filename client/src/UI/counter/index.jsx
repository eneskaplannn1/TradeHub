import { styled } from "styled-components";
import Button from "../button";
import Input from "../form/input/input";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../features/product/productSlice";
import { useState } from "react";

const StyledCounter = styled.div`
  display: flex;
`;
function Counter({ quantity, product }) {
  const dispatch = useDispatch();
  const handleDecrement = function () {
    dispatch(removeProductFromCart(product));
  };

  const handleIncrement = function () {
    dispatch(addProductToCart(product));
  };
  return (
    <StyledCounter>
      <Button size="xsmall" variation="counter" onClick={handleDecrement}>
        -
      </Button>
      <Button size="amount" variation="amount">
        {quantity}
      </Button>
      <Button size="xsmall" variation="counter" onClick={handleIncrement}>
        +
      </Button>
    </StyledCounter>
  );
}

export default Counter;
