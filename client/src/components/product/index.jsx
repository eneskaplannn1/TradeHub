import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductToFavorites } from "../../services/apiProducts";
import checkIsNewProduct from "../../utils/checkNewProduct";
import { useSelector } from "react-redux";

function Product({ product }) {
  const user = useSelector((store) => store.auth.user);
  const queryClient = useQueryClient();
  const isNew = checkIsNewProduct(product?.createdAt);

  const { mutate } = useMutation({
    mutationFn: addProductToFavorites,
    mutationKey: ["addFavorites", product._id],
    onSuccess: (data) => {
      if (!data.data.isFavorite) {
        toast.loading("Product adding to favorites... ");
      } else {
        toast.loading("Product removing from favorites...");
      }
      queryClient.invalidateQueries(["login"]);
      queryClient.invalidateQueries(["favorites"]);
    },
  });

  const handleAddFavorites = function () {
    mutate(product._id);
  };

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
