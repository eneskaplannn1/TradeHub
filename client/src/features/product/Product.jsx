import checkIsNewProduct from "../../utils/checkNewProduct";
import useFavorites from "../../hooks/useFavorites";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { BsBox } from "react-icons/bs";
import { styled } from "styled-components";
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
        <img src={`/productImage/${product?.photo}`} />
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
  grid-template-rows: 2fr 12fr 3.6fr;

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

  @media screen and (min-width: 2200px) and (max-width: 3000px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1920px) and (max-width: 2200px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1600px) and (max-width: 1920px) {
    font-size: 22px;
  }
  @media screen and (min-width: 800px) and (max-width: 1600px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
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
  display: flex;

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
    align-self: flex-start;
    max-width: 100%;
    height: auto;

    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
    shape-margin: 0.75rem;

    border-radius: var(--border-radius-sm);
    -webkit-object-fit: cover;
    object-fit: cover; /* Resmi div'e tamamen sığdırır ve oranı korur */
  }
`;
const StyledProductFooter = styled.div`
  p {
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
  padding: 0.4rem;
  gap: 0.2rem;
`;
