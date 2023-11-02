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
import RequiredAuth from "./features/auth/RequiredAuth";
import { useDispatch } from "react-redux";
import { logUserIn } from "./features/auth/authSlice";
import { handleLoginWithCookie } from "./services/apiAuth";

import GlobalStyle from "./styles/globalStyles";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/Authentication/SignUp";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import Login from "./pages/Authentication/Login";
import UnAuthorized from "./pages/Authentication/UnAuthorized";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import OrderDetail from "./pages/OrderDetail";
import ConfirmAccount from "./pages/ConfirmAccount";
import Reviews from "./pages/Reviews";

import Address from "./pages/Address";
import Account from "./pages/Account";
import ProductCategory from "./pages/ProductCategory";
import AuthContainer from "./container/Auth/AuthContainer.jsx";

import RootLayout from "./ui/RootLayout";
import AccountLayout from "./ui/AccountLayout";

function App() {
  const dispatch = useDispatch();
  useQuery({
    queryFn: handleLoginWithCookie,
    queryKey: ["login"],
    onSuccess: (data) => {
      dispatch(logUserIn(data?.data));
    },
  });

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

            <Route element={<AccountLayout />}>
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
              <AuthContainer>
                <Outlet />
              </AuthContainer>
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
