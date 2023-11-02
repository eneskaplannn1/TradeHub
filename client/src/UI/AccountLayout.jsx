import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Sidebar from "../sidebar";
import StyledBoxTemplate from "../box-template.jsx";

const StyledAccoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.6rem;
`;

function AccountLayout() {
  return (
    <StyledAccoutLayout>
      <Sidebar />
      <section>
        <StyledBoxTemplate>
          <Outlet />
        </StyledBoxTemplate>
      </section>
    </StyledAccoutLayout>
  );
}

export default AccountLayout;
