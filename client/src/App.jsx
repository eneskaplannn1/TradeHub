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
import RequiredAuth from "./features/auth/requiredAuth";
import { useDispatch } from "react-redux";
import { logUserIn } from "./features/auth/authSlice";
import { handleLoginWithCookie } from "./services/apiAuth";

import RootLayout from "./pages/RootLayout/RootLayout";
import Products from "./pages/RootLayout/Products";
import Cart from "./pages/RootLayout/Cart";
import Orders from "./pages/RootLayout/Orders";
import Favorites from "./pages/RootLayout/Favorites";

import SignUp from "./pages/Authentication/SignUp";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import Login from "./pages/Authentication/Login";
import UnAuthorized from "./pages/Authentication/UnAuthorized";
import PageNotFound from "./pages/Error/pageNotFound";
import ProductDetail from "./pages/RootLayout/ProductDetail";
import OrderDetail from "./pages/RootLayout/OrderDetail";
import ConfirmAccount from "./pages/Authentication/ConfirmAccount";
import Reviews from "./pages/RootLayout/Reviews";

import GlobalStyle from "./styles/globalStyles";
import { StyledAuthContainer } from "./UI/Auth";
import Layout from "./components/layout";
import Address from "./pages/RootLayout/Address";
import Account from "./pages/RootLayout/Account";
import ProductCategory from "./pages/RootLayout/ProductCategory";

function App() {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryFn: handleLoginWithCookie,
    queryKey: ["login"],
    retry: 2,
  });

  if (data?.data) {
    dispatch(logUserIn(data?.data));
  }

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 2000,
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
              <RequiredAuth allowedRoles={["customer", "seller"]}>
                <RootLayout />
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
              element={<ProductDetail />}
            />

            {/* Product route */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* Account and Spesific Routes */}

            <Route element={<Layout />}>
              <Route path="/account">
                <Route index path="/account/orders" element={<Orders />} />
                <Route
                  path="/account/orders/:orderDetail"
                  element={<OrderDetail />}
                />
                <Route path="/account/reviews" element={<Reviews />} />
                <Route path="/account/user-address" element={<Address />} />
                <Route path="/account/user-information" element={<Account />} />
              </Route>
            </Route>
          </Route>

          {/* Authentication routes */}
          <Route
            element={
              <StyledAuthContainer>
                <Outlet />
              </StyledAuthContainer>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="confirmAccount" element={<ConfirmAccount />} />
            <Route path="forgetPassword" element={<ForgetPassword />} />
            <Route path="unAuthorized" element={<UnAuthorized />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
