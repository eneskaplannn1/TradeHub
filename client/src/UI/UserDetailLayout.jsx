import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import StyledBoxTemplate from "./BoxTemplate";
import Sidebar from "./Sidebar";

function UserDetailLayout() {
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

export default UserDetailLayout;

const StyledAccoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.6rem;
`;
