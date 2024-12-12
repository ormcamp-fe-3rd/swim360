import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import Home from "./pages/HomPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import MyPage from "./pages/MyPage";
import Product from "./pages/Product";
import ProductListPage from "./pages/ProductListPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/productlist", element: <ProductListPage /> },
  { path: "/product", element: <Product /> },
  { path: "/loginpage", element: <LoginPage /> },
  { path: "/joinpage", element: <JoinPage /> },
  { path: "/joincompletionpage", element: <JoinCompletionPage /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/changepwdcompletionpage", element: <ChangePwdCompletionPage /> },
  { path: "/paymentcompletionpage", element: <PayMentCompletionPage /> },
  { path: "/paymentorderpage", element: <PayMentOrderPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
