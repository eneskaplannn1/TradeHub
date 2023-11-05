import checkIsNewProduct from "../../utils/checkNewProduct";
import useFavorites from "../../hooks/useFavorites";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { css, styled } from "styled-components";

function Product({ product }) {
  const user = useSelector((store) => store.auth.user);
  const isNew = checkIsNewProduct(product?.createdAt);

  const { handleAddFavorites, favIsHighlighted } = useFavorites({ product });
  const selected = user.favorites.includes(product._id);

  return (
    <ProductSummary>
      <ProductHead>
        {!product?.cargoCharge ? (
          <StyledCargoHead>
            <BsBox />
            <p>Free cargo</p>
          </StyledCargoHead>
        ) : (
          <div className="new">
            <span>
              Yeni <br /> ürün
            </span>
          </div>
        )}
        <StyledProductFavorite
          className={favIsHighlighted ? "bump" : ""}
          selected={selected}
          onClick={handleAddFavorites}
        >
          <AiOutlineHeart />
        </StyledProductFavorite>
      </ProductHead>
      <StyledProductImage>
        {isNew && !product?.cargoCharge && (
          <div className="new">
            <span>
              Yeni <br /> ürün
            </span>
          </div>
        )}
        <img src={`/productImage/${product?.category}.png`} />
      </StyledProductImage>
      <StyledProductFooter>
        <p>
          <span>{product?.brand}</span> {product?.productDesc}
        </p>
        <p>{product?.price}$</p>
      </StyledProductFooter>
      <NavLink className="navigation" to={`/product/${product?._id}`}></NavLink>
    </ProductSummary>
  );
}

export default Product;

const ProductSummary = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 2fr 10fr 3.6fr;

  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-zinc-100);

  .navigation {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .bump {
    transition: 0.4s ease;
    scale: 1.2;
  }
`;
const ProductHead = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  padding: 0.2rem 0.4rem;

  .new {
    position: absolute;
    width: 60px;
    height: 60px;

    top: 0.7rem;
    left: 0.7rem;

    background-color: red;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 12px;
      color: white;
      font-weight: bold;
    }
  }
`;
const StyledProductImage = styled.div`
  position: relative;

  .new {
    position: absolute;
    width: 60px;
    height: 60px;

    top: 0.4rem;
    left: 0.4rem;

    background-color: red;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 12px;
      color: white;
      font-weight: bold;
    }
  }

  img {
    border-radius: var(--border-radius-sm);
    object-fit: cover; /* Resmi div'e tamamen sığdırır ve oranı korur */
  }
`;
const StyledProductFooter = styled.div`
  p {
    font-size: 20px;
    padding: 0.4rem 0.6rem;
    &:first-of-type {
      span {
        font-weight: bold;
      }
    }
    &:last-of-type {
      font-weight: bold;
      color: var(--color-red-900);
    }
  }
`;
const StyledCargoHead = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;

  background-color: var(--color-zinc-700);
  color: var(--color-zinc-0);

  border-radius: var(--border-radius-sm);
  font-size: 16px;
  padding: 0.4rem;
  gap: 0.2rem;
`;
const StyledProductFavorite = styled.button`
  z-index: 100;
  cursor: pointer;
  position: absolute;
  right: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid var(--color-zinc-800);

  .selected {
    background-color: var(--color-orange-700);
  }

  &:hover {
    border: 1px solid var(--color-zinc-0);
    color: var(--color-zinc-0);
    background-color: var(--color-orange-700);
  }

  ${(props) =>
    props.selected
      ? css`
          background-color: var(--color-orange-700);
          color: var(--color-zinc-0);
          border: 1px solid var(--color-zinc-0);
        `
      : css``}
`;
