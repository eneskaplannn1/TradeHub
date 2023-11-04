import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import RequiredAuth from "./features/authentication/RequiredAuth";
import { useDispatch } from "react-redux";
import { logUserIn } from "./features/authentication/authSlice";
import { handleLoginWithCookie } from "./services/apiAuth";

import GlobalStyle from "./styles/globalStyles";

import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/SignUp";
import ForgetPasswordPage from "./pages/ForgetPassword";
import Login from "./pages/Login";
import UnAuthorized from "./pages/UnAuthorized";
import PageNotFound from "./pages/PageNotFound";
import ConfirmAccount from "./pages/ConfirmAccount";
import Reviews from "./pages/Reviews";

import Account from "./pages/Account";
import ProductCategory from "./pages/ProductCategory";

import ProductDetailPage from "./pages/ProductDetail";
import ShoppingCart from "./pages/Cart";
import OrderDetailPage from "./pages/OrderDetail";
import AuthContainer from "./features/authentication/AuthContainer";
import AddressPage from "./pages/Address";
import MainLayout from "./ui/MainLayout";
import UserDetailLayout from "./ui/UserDetailLayout";

function App() {
  const dispatch = useDispatch();
  useQuery({
    queryKey: ["login"],
    queryFn: handleLoginWithCookie,
    onSuccess: (data) => {
      dispatch(logUserIn(data?.data));
    },
  });

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <Toaster
        position="top-left"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 3500,
          },
          loading: {
            duration: 500,
          },
          style: {
            fontSize: "1rem",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "white",
            backgroundColor: "grey",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <RequiredAuth allowedRoles={["customer"]}>
                <MainLayout />
              </RequiredAuth>
            }
          >
            <Route index element={<Navigate replace to="/products" />} />

            {/* Product routes */}
            <Route path="/products" index element={<Products />} />
            <Route
              path="/products/:category"
              index
              element={<ProductCategory />}
            />
            <Route
              path="/product/:productId"
              index
              element={<ProductDetailPage />}
            />

            {/* Product route */}
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* Account and Spesific Routes */}

            <Route element={<UserDetailLayout />}>
              <Route path="/account">
                <Route index path="/account/orders" element={<Orders />} />
                <Route
                  path="/account/orders/:orderDetail"
                  element={<OrderDetailPage />}
                />
                <Route path="/account/reviews" element={<Reviews />} />
                {/* <Route path="/account/user-address" element={<AddressPage />} /> */}
                <Route path="/account/user-information" element={<Account />} />
              </Route>
            </Route>
          </Route>

          {/* Authentication routes */}
          <Route
            element={
              <AuthContainer>
                <Outlet />
              </AuthContainer>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="confirmAccount" element={<ConfirmAccount />} />
            <Route path="forgetPassword" element={<ForgetPasswordPage />} />
            <Route path="unAuthorized" element={<UnAuthorized />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
