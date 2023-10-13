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

function Product({ product }) {
  const isNew =
    Date.now("2022-04-04T17:56:58.347Z") > Date.now() - 3 * 24 * 60 * 60 * 1000;

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
        <img src="/product.jpg" />
      </StyledProductImage>
      <StyledProductFooter>
        <p>
          <span>{product.brand}</span> {product.productDesc}
        </p>
        <p>{product.price}$</p>
      </StyledProductFooter>
    </ProductSummary>
  );
}

export default Product;
