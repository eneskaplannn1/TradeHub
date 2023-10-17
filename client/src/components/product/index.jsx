import { NavLink } from "react-router-dom";

import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import {
  ProductHead,
  ProductSummary,
  StyledCargoHead,
  StyledProductFavorite,
  StyledProductFooter,
  StyledProductImage,
} from "../../UI/product";
import checkIsNewProduct from "../../utils/checkNewProduct";
import { useSelector } from "react-redux";
import useFavorites from "../../hooks/useFavorites";

function Product({ product }) {
  const user = useSelector((store) => store.auth.user);
  const isNew = checkIsNewProduct(product?.createdAt);

  const { handleAddFavorites } = useFavorites({ product });

  const selected = user.favorites.includes(product._id);
  return (
    <ProductSummary>
      <ProductHead>
        {!product?.cargoCharge && (
          <StyledCargoHead>
            <BsBox />
            <p>Free cargo</p>
          </StyledCargoHead>
        )}
        <StyledProductFavorite selected={selected} onClick={handleAddFavorites}>
          <AiOutlineHeart />
        </StyledProductFavorite>
      </ProductHead>
      <StyledProductImage>
        {isNew && (
          <div>
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
