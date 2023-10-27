import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import StyledBox from "../box";

import { AiOutlineInbox, AiOutlineUser } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import StyledBoxTemplate from "../box-template.jsx";
import { useSelector } from "react-redux";

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
