import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../features/product/productSlice";
import { toast } from "react-hot-toast";
import useFavorites from "../../hooks/useFavorites";

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

function ProductDetailContainer({ productData, isLoading }) {
  const user = useSelector((store) => store.auth.user);

  const dispatch = useDispatch();
  //prettier-ignore
  const {brand,productDesc,price,ratingsAverage,category} = productData;

  const { handleAddFavorites } = useFavorites({ product: productData });

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

  const selected = user.favorites.includes(productData._id);
  console.log(productData);

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
            <StyledProductFavorite
              selected={selected}
              onClick={handleAddFavorites}
            >
              <AiOutlineHeart />
            </StyledProductFavorite>
          </StyledButtonContainer>
        </StyledProductInfo>
      )}
    </StyledProductDetail>
  );
}

export default ProductDetailContainer;
