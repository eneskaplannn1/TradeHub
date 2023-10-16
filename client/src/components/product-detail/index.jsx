import { useDispatch } from "react-redux";

import {
  StyledButtonContainer,
  StyledImageContainer,
  StyledProductDescription,
  StyledProductDetail,
  StyledProductInfo,
  StyledProductPrice,
  StyledReviewSummary,
} from "../../UI/product-detail";
import Skeleton from "../../components/skeleton";
import Button from "../../UI/button";
import StarRating from "../../UI/star";
import { AiOutlineHeart } from "react-icons/ai";
import { StyledProductFavorite } from "../../UI/product";
import { addProductToCart } from "../../features/product/productSlice";
import { toast } from "react-hot-toast";

function ProductDetailContainer({ productData, isLoading }) {
  const dispatch = useDispatch();

  //prettier-ignore
  const {brand,productDesc,price,ratingsAverage,category} = productData; //! sold , cargoCharge ve quantity i destruct etmedim

  const handleAddCart = function () {
    dispatch(
      addProductToCart({
        productId: productData._id,
        brand,
        productDesc,
        category,
        price,
        quantity: 1,
      })
    );
    toast.success("Product added to cart successfully");
  };

  return (
    <StyledProductDetail>
      {isLoading ? (
        <Skeleton width={359} height={500} />
      ) : (
        <StyledImageContainer>
          <img loading="lazy" src={`/productImage/${category}.png`} />
        </StyledImageContainer>
      )}
      {isLoading ? (
        <Skeleton width={540} height={300} />
      ) : (
        <StyledProductInfo>
          <StyledProductDescription>
            <span>{brand}</span> {productDesc}
          </StyledProductDescription>
          <StyledReviewSummary>
            <div className="rating">
              <span>{ratingsAverage}</span>
              <StarRating
                maxRating={5}
                height={24}
                width={24}
                averageRating={ratingsAverage}
              />
            </div>
            <div>
              <span>2000</span> reviews
            </div>
            <div className="hearth">
              <AiOutlineHeart />
              <span>2000</span> favorites
            </div>
          </StyledReviewSummary>
          <StyledProductPrice>{price} USD</StyledProductPrice>
          <StyledButtonContainer>
            <Button
              size="xsmall"
              variation="orange"
              onClick={() => handleAddCart()}
            >
              Add to the card
            </Button>
            <StyledProductFavorite>
              <AiOutlineHeart />
            </StyledProductFavorite>
          </StyledButtonContainer>
        </StyledProductInfo>
      )}
    </StyledProductDetail>
  );
}

export default ProductDetailContainer;