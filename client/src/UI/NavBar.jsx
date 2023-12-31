import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { handleLogout } from "../services/apiAuth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authentication/authSlice";
import { toast } from "react-hot-toast";

import { styled } from "styled-components";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useEffect, useState } from "react";

let isInitial = true;

function Navbar() {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: handleLogout,
    mutationKey: ["logout"],
    onSuccess: async () => {
      toast.loading("Logging out...");
      dispatch(logout());
      navigate("/login");
    },
  });

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.products.length]);

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
        <li className={btnIsHighlighted ? "bump" : ""}>
          <NavLink to="/cart">
            <AiOutlineShoppingCart />
            My Cart
          </NavLink>
          {cart.products.length !== 0 && <div className="productNum"></div>}
        </li>
        <li className="button" onClick={handleLogoutUser}>
          <HiArrowRightOnRectangle />
          <button onClick={handleLogoutUser}>Log out</button>
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

    padding: 0 2rem;

    font-weight: 500;
  }
  li {
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-orange-800);
    }
  }
  a,
  button,
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }

  .bump {
    scale: 1.3;
    color: var(--color-orange-800);
  }

  @media (max-width: 550px) {
    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    li {
      font-size: 16px;
      svg {
        width: 25px;
        height: 25px;
      }
      a,
      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
