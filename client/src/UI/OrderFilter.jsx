import { styled } from "styled-components";
import StyledBox from "./Box";
import { useSelector } from "react-redux";

function OrderFilter() {
  const { name } = useSelector((store) => store.auth.user);
  return (
    <StyledOrderHead>
      <h2>{name}'s orders</h2>
    </StyledOrderHead>
  );
}

export default OrderFilter;

const StyledOrderHead = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;

  margin: 1rem 0;
  padding: 1rem;
`;
