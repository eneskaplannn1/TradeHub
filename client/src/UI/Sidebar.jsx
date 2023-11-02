import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import StyledBox from "./Box";
import StyledBoxTemplate from "./BoxTemplate";
import { styled } from "styled-components";
import { AiOutlineInbox, AiOutlineUser } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

function Sidebar() {
  const { name } = useSelector((store) => store.auth.user);
  return (
    <StyledSidebar>
      <StyledBoxTemplate>
        <StyledBox variation="bar">
          <h4>{name} </h4>
        </StyledBox>
      </StyledBoxTemplate>
      <StyledBoxTemplate>
        <StyledBox variation="bar">
          <ul>
            <li>
              <NavLink to="/account/orders">
                <AiOutlineInbox />
                All Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/reviews">
                <TbMessages />
                My Reviews
              </NavLink>
            </li>
          </ul>
        </StyledBox>
      </StyledBoxTemplate>
      <StyledBoxTemplate>
        <StyledBox variation="bar">
          <ul>
            <li>
              <NavLink to="/account/user-information">
                <AiOutlineUser />
                Account Information
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/user-address">
                <SlLocationPin />
                Address Information
              </NavLink>
            </li>
          </ul>
        </StyledBox>
      </StyledBoxTemplate>
    </StyledSidebar>
  );
}

export default Sidebar;

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0.4rem;
`;
