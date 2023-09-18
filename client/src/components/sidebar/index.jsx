import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import StyledBox from "../box";

import { AiOutlineInbox, AiOutlineUser } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import StyledBoxTemplate from "../box-template.jsx";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0.4rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledBoxTemplate>
        <StyledBox variation="bar">
          <h4>Enes Kaplan </h4>
        </StyledBox>
      </StyledBoxTemplate>
      <StyledBoxTemplate>
        <StyledBox variation="bar">
          <ul>
            <li>
              <AiOutlineInbox />
              <NavLink to="/account/orders">Tüm Siparişlerim</NavLink>
            </li>
            <li>
              <TbMessages />
              <NavLink to="/my-evaluates">Değerlendirmelerim</NavLink>
            </li>
          </ul>
        </StyledBox>
      </StyledBoxTemplate>
      <StyledBoxTemplate>
        <StyledBox variation="bar">
          <ul>
            <li>
              <AiOutlineUser />
              <NavLink to="/account/user-info">Kullanıcı Bilgilerim</NavLink>
            </li>
            <li>
              <SlLocationPin />
              <NavLink to="/account/user-address">Adres Bilgilerim</NavLink>
            </li>
          </ul>
        </StyledBox>
      </StyledBoxTemplate>
    </StyledSidebar>
  );
}

export default Sidebar;
