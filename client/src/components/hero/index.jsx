import Skeleton from "../skeleton/index";

import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import Pagination from "../pagination";
import {
  ProductHead,
  ProductSummary,
  StyledCargoHead,
  StyledProductContainer,
  StyledProductFavorite,
  StyledProductFooter,
  StyledProductImage,
} from "../../UI/product";

function Hero() {
  return (
    <>
      <StyledProductContainer>
        {/* {Array(8)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} height={480} />
          ))} */}
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <ProductSummary key={index}>
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
          ))}
      </StyledProductContainer>
      <Pagination />
    </>
  );
}

export default Hero;
