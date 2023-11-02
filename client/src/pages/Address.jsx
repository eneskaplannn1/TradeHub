import { styled } from "styled-components";
import Address from "../features/address/Address.jsx";
import StyledBoxTemplate from "../UI/BoxTemplate.jsx";

function AddressPage() {
  return (
    <>
      <StyledBoxTemplate>
        <h1>My Address Information</h1>
      </StyledBoxTemplate>
      <StyledAddressContainer>
        <Address />
        <Address />
        <Address />
        <Address />
      </StyledAddressContainer>
    </>
  );
}

export default AddressPage;

const StyledAddressContainer = styled.main`
  padding: 2rem 1rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
