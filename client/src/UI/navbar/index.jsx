import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { handleLogout } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { toast } from "react-hot-toast";

import { styled } from "styled-components";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: handleLogout,
    mutationKey: ["logout"],
    onSuccess: () => {
      dispatch(logout());
      toast.loading("Logging out...");
      navigate("/login");
    },
  });

  const handleLogoutUser = function () {
    mutate();
  };

  return (
    <StyledNavbar>
      <ul>
        <li>
          <NavLink to="/account/orders">
            <RiAccountCircleLine />
            Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <AiOutlineHeart />
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <AiOutlineShoppingCart />
            My Cart
          </NavLink>
        </li>
        <li>
          <button onClick={handleLogoutUser}>
            <HiArrowRightOnRectangle />
            Log out
          </button>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;
    font-size: 21px;

    li {
      transition: all 0.2s ease;

      a,
      button {
        gap: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:hover {
        cursor: pointer;
        color: var(--color-orange-800);
      }
    }
  }
`;
