import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import CartPage from "./pages/CartPage";
import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/HomePage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import MyPageEditPage from "./pages/MyPageEditPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
import PointAndReviewPage from "./pages/PointAndReviewPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import UserVerificationPage from "./pages/UserVerificationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product_list/:name", element: <ProductListPage /> },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      { path: "/review/:id", element: <ProductDetailPage /> },
      { path: "/loginpage", element: <LoginPage /> },
      { path: "/joinpage", element: <JoinPage /> },
      { path: "/joincompletionpage", element: <JoinCompletionPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/mypage/auth_pw", element: <UserVerificationPage /> },
      { path: "/mypage/edit", element: <MyPageEditPage /> },
      { path: "/mypage/point_and_review", element: <PointAndReviewPage /> },
      {
        path: "/changepwdcompletionpage",
        element: <ChangePwdCompletionPage />,
      },
      { path: "/paymentcompletionpage", element: <PayMentCompletionPage /> },
      { path: "/paymentorderpage", element: <PayMentOrderPage /> },
      { path: "/cart", element: <CartPage />},
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
