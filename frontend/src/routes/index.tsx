import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import AgreesPage from "./pages/AgreesPage";
import CartPage from "./pages/CartPage";
import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import ErrorPage from "./pages/ErrorPage";
import FindIdPage from "./pages/FindIdPage";
import FindIdPwdPage from "./pages/FindIdPwdPage";
import Home from "./pages/HomePage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import MyPageEditPage from "./pages/MyPageEditPage";
import OrderPage from "./pages/OrderPage";
import OrderThanksPage from "./pages/OrderThanksPage";
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

      { path: "/find_id_pwd", element: <FindIdPwdPage /> },
      { path: "/find_id", element: <FindIdPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/join", element: <JoinPage /> },
      { path: "/join_completion", element: <JoinCompletionPage /> },
      { path: "/agrees", element: <AgreesPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/mypage/verification", element: <UserVerificationPage /> },
      { path: "/mypage/edit", element: <MyPageEditPage /> },
      { path: "/mypage/point_and_review", element: <PointAndReviewPage /> },

      {
        path: "/change_pwd_completion",
        element: <ChangePwdCompletionPage />,
      },
      { path: "/orderthanks", element: <OrderThanksPage /> },
      { path: "/order", element: <OrderPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
