import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../features/product/productSlice";
import { toast } from "react-hot-toast";
import useFavorites from "../../hooks/useFavorites";

import Skeleton from "../../ui/Skeleton";
import Button from "../../ui/Button";
import StarRating from "../../ui/StarRating";
import { AiOutlineHeart } from "react-icons/ai";
import { StyledProductFavorite } from "../../ui/product";
import { styled } from "styled-components";

function ProductDetailContainer({ productData = {}, isLoading }) {
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();

  const {
    brand,
    productDesc,
    price,
    ratingsAverage,
    ratingsQuantity,
    category,
  } = productData;

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
              <span>{ratingsQuantity}</span> reviews
            </div>
            {/* <div className="hearth">
              <AiOutlineHeart />
              <span>2000</span> favorites
            </div> */}
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

const StyledProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;

  padding-left: 5rem;
  padding-right: 15rem;
`;

const StyledImageContainer = styled.div`
  height: 500px;
  border: 1px solid var(--color-zinc-200);
  img {
    width: 100%;
    height: 500px;
  }
`;

const StyledProductInfo = styled.div`
  height: fit-content;
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-lg);
  padding: 1rem 0.7rem 2rem;
  span {
    font-weight: bold;
  }
`;

const StyledProductDescription = styled.div`
  font-size: 24px;
  font-weight: 200;
`;

const StyledReviewSummary = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  font-size: 16px;

  .rating {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .hearth {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    &:hover {
      color: var(--color-orange-500);
    }
  }
`;

const StyledProductPrice = styled.div`
  font-size: 3rem;
  padding: 1rem 0.4rem;
  color: var(--color-orange-600);
`;

const StyledButtonContainer = styled.div`
  padding: 0 0.4rem;
  position: relative;
  display: grid;
  grid-template-columns: 8fr 1fr;
  gap: 2rem;
  button {
    height: 50px;
  }
`;
