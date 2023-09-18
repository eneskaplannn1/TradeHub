import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout/RootLayout";
import Products from "./pages/RootLayout/Products";
import Cart from "./pages/RootLayout/Cart";
import Account from "./pages/RootLayout/Account";
import Favorites from "./pages/RootLayout/Favorites";

import SignUp from "./pages/Authentication/SignUp";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import Login from "./pages/Authentication/Login";
import UnAuthorized from "./pages/Authentication/UnAuthorized";
import PageNotFound from "./pages/Error/pageNotFound";
import ProductDetail from "./pages/RootLayout/ProductDetail";
import Orders from "./pages/RootLayout/Orders";
import OrderDetail from "./pages/RootLayout/OrderDetail";
import ConfirmAccount from "./pages/Authentication/ConfirmAccount";

import GlobalStyle from "./styles/globalStyles";
import { StyledAuthContainer } from "./UI/Auth";
import Layout from "./components/layout";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Navigate replace to="/products" />} />

            <Route path="/products" index element={<Products />} />
            <Route
              path="/products/:pruductId"
              index
              element={<ProductDetail />}
            />

            <Route element={<Layout />}>
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/account/orders" element={<Account />} />
              <Route path="/orders" element={<Account />} />
              <Route
                path="/account/orders/:orderDetail"
                element={<OrderDetail />}
              />
            </Route>
          </Route>
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
    </QueryClientProvider>
  );
}

export default App;
