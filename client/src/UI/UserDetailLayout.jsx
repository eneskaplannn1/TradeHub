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
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.6rem;

  section {
    border: 1px solid var(--color-zinc-200);
    border-radius: 8px;
    padding: 1rem;
  }

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;

    .user {
      display: none;
    }
  }
`;
