import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { toast } from "react-hot-toast";

import Button from "../../UI/button";
import { AiOutlineHeart } from "react-icons/ai";
import StarRating from "../../UI/star";
import { StyledProductFavorite } from "../../UI/product";
import {
  StyledButtonContainer,
  StyledImageContainer,
  StyledProductDescription,
  StyledProductDetail,
  StyledProductInfo,
  StyledProductPrice,
  StyledReviewSummary,
} from "../../UI/product-detail";
import {
  StyledProductReviewContainer,
  StyledProductReviews,
  StyledReview,
  StyledReviewHead,
  StyledReviews,
} from "../../UI/review";
import Skeleton from "../../components/skeleton";
import { addProductToCart } from "../../features/product/productSlice";

function ProductDetail() {
  const dispatch = useDispatch();

  const { productId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  const productData = data?.data?.data?.doc || {};

  const {
    brand,
    productDesc,
    price,
    quantity, // change this name  to meaningful one
    ratingsAverage,
    ratingsQuantity,
    category,
    cargoCharge,
    sold,
  } = productData;

  const handleAddCart = function () {
    dispatch(
      addProductToCart({
        productId,
        brand,
        productDesc,
        category,
        price,
        quantity: 1,
      })
    );
    // console.log({
    //   productId,
    //   brand,
    //   productDesc,
    //   category,
    //   price,
    //   quantity: 1,
    // });
    toast.success("Product added to cart successfully");
  };

  return (
    <>
      <StyledProductDetail>
        {isLoading ? (
          <Skeleton width={359} height={500} />
        ) : (
          <StyledImageContainer>
            <img src={`/productImage/${category}.jpg`} />
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
      <StyledProductReviewContainer>
        <h1>Product Reviews</h1>
        <StyledProductReviews>
          <StyledReviewHead>
            <div className="rating">
              <span>{ratingsAverage}</span>
              <StarRating
                maxRating={5}
                width={40}
                height={40}
                averageRating={ratingsAverage}
              />
            </div>
            <div>| {ratingsQuantity} Review </div>
          </StyledReviewHead>
          <StyledReviews>
            <StyledReview>
              <div className="header">
                <StarRating
                  height={32}
                  width={32}
                  isEditing={false}
                  averageRating={4}
                  maxRating={5}
                />
                <div>Best Product Ever</div>
              </div>
              <div className="footer">
                <div>Enes Kaplan</div>
                <div>
                  | <span style={{ marginLeft: "1rem" }}></span> 24 October 2022
                </div>
              </div>
            </StyledReview>
            <StyledReview>
              <div className="header">
                <StarRating
                  height={32}
                  width={32}
                  isEditing={false}
                  averageRating={4}
                  maxRating={5}
                />
                <div>Best Product Ever</div>
              </div>
              <div className="footer">
                <div>Enes Kaplan</div>
                <div>
                  | <span style={{ marginLeft: "1rem" }}></span> 24 October 2022
                </div>
              </div>
            </StyledReview>
            <StyledReview>
              <div className="header">
                <StarRating
                  height={32}
                  width={32}
                  isEditing={false}
                  averageRating={4}
                  maxRating={5}
                />
                <div>Best Product Ever</div>
              </div>
              <div className="footer">
                <div>Enes Kaplan</div>
                <div>
                  | <span style={{ marginLeft: "1rem" }}></span> 24 October 2022
                </div>
              </div>
            </StyledReview>
          </StyledReviews>
        </StyledProductReviews>
      </StyledProductReviewContainer>
    </>
  );
}

export default ProductDetail;
