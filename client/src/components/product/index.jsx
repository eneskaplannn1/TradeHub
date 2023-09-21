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

function Product() {
  return (
    <ProductSummary>
      <ProductHead>
        <StyledCargoHead>
          <BsBox />
          <p>Free cargo</p>
        </StyledCargoHead>
        <StyledProductFavorite>
          <AiOutlineHeart />
        </StyledProductFavorite>
      </ProductHead>
      <StyledProductImage>
        <div>
          <span>
            Yeni <br /> ürün
          </span>
        </div>
        <img src="product.jpg" />
      </StyledProductImage>
      <StyledProductFooter>
        <p>
          <span>Anker</span> q30 headphone
        </p>
        <p>2500TL</p>
      </StyledProductFooter>
    </ProductSummary>
  );
}

export default Product;
