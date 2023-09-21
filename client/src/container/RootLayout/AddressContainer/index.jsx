import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import Address from "../../../components/address/index.jsx";

const StyledAddressContainer = styled.main`
  padding: 2rem 1rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

function AddressContainer() {
  return (
    <StyledBoxTemplate>
      <StyledBoxTemplate>
        <h1>My Address Information</h1>
      </StyledBoxTemplate>
      <StyledAddressContainer>
        <Address />
        <Address />
        <Address />
        <Address />
      </StyledAddressContainer>
    </StyledBoxTemplate>
  );
}

export default AddressContainer;
