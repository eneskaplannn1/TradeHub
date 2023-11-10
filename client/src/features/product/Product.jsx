import checkIsNewProduct from "../../utils/checkNewProduct";
import useFavorites from "../../hooks/useFavorites";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { BsBox } from "react-icons/bs";
import { css, styled } from "styled-components";
import FavoriteProduct from "../../ui/FavoriteProduct";

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
              New <br /> Product
            </span>
          </div>
        )}
        <FavoriteProduct
          favIsHighlighted={favIsHighlighted}
          selected={selected}
          handleAddFavorites={handleAddFavorites}
        />
      </ProductHead>
      <StyledProductImage>
        {isNew && !product?.cargoCharge && (
          <div className="new">
            <span>
              New <br /> Product
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

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
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

    top: 0.5rem;
    left: 0.5rem;

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
    width: 100%;
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
