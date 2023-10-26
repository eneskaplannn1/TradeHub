import { useDispatch } from "react-redux";
import { clearCart } from "../features/product/productSlice";

function useCheckoutSuccess() {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const checkoutSuccess = urlParams.get("checkoutSuccess");
  if (checkoutSuccess) {
    dispatch(clearCart());
  }
}

export default useCheckoutSuccess;
