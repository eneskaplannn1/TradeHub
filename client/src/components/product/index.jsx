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
import { NavLink } from "react-router-dom";

function Product({ product }) {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const productCreatedAt = new Date(product.createdAt);

  const isNew =
    new Date(
      `${productCreatedAt.getFullYear()}-${productCreatedAt.getMonth()}-${productCreatedAt.getDate()}`
    ) >
    new Date(
      `${sevenDaysAgo.getFullYear()}-${sevenDaysAgo.getMonth()}-${sevenDaysAgo.getDate()}`
    );

  return (
    <ProductSummary>
      <ProductHead>
        {!product.cargoCharge && (
          <StyledCargoHead>
            <BsBox />
            <p>Free cargo</p>
          </StyledCargoHead>
        )}
        <StyledProductFavorite>
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
        <img src={`/productImage/${product.category}.jpg`} />
      </StyledProductImage>
      <StyledProductFooter>
        <p>
          <span>{product.brand}</span> {product.productDesc}
        </p>
        <p>{product.price}$</p>
      </StyledProductFooter>
      <NavLink className="navigation" to={`/product/${product._id}`}></NavLink>
    </ProductSummary>
  );
}

export default Product;
