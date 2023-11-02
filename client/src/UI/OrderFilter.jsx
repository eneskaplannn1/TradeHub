import { styled } from "styled-components";
import StyledBox from "../../../components/box";
import { useSelector } from "react-redux";

function OrderFilter() {
  const { name } = useSelector((store) => store.auth.user);
  return (
    <>
      <StyledOrderHead>
        <StyledBox variation="main">
          <h2>{name}'s orders</h2>
        </StyledBox>
      </StyledOrderHead>
    </>
  );
}

export default OrderFilter;

const StyledOrderHead = styled.div`
  margin: 1rem;
  border: 1px solid var(--color-zinc-200);
  border-radius: 8px;
`;
