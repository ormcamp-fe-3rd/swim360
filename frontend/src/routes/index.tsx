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
import PayMentOrderPage from "./pages/PayMentOrderPage";
import PayMentPage from "./pages/PayMentPage";
import PointAndReviewPage from "./pages/PointAndReviewPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";

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
      { path: "/findidpwdpage", element: <FindIdPwdPage /> },
      { path: "/findidpage", element: <FindIdPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/joinpage", element: <JoinPage /> },
      { path: "/joincompletionpage", element: <JoinCompletionPage /> },
      { path: "/mypage/:id", element: <MyPage /> },
      { path: "/agreespage", element: <AgreesPage /> },
      { path: "/mypage/edit", element: <MyPageEditPage /> },
      { path: "/mypage/:id/point_and_review", element: <PointAndReviewPage /> },
      {
        path: "/changepwdcompletionpage",
        element: <ChangePwdCompletionPage />,
      },
      { path: "/paymentpage", element: <PayMentPage /> },
      { path: "/paymentorderpage", element: <PayMentOrderPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
