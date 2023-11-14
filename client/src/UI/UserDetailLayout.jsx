import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Sidebar from "./Sidebar";

function UserDetailLayout() {
  return (
    <StyledAccoutLayout>
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </StyledAccoutLayout>
  );
}

export default UserDetailLayout;

const StyledAccoutLayout = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.6rem;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;

    .user {
      display: none;
    }
  }
`;
