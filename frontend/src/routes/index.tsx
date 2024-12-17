import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import AgreesPage from "./pages/AgreesPage";
import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import ErrorPage from "./pages/ErrorPage";
import FindIdPage from "./pages/FindIdPage";
import FindIdPwdPage from "./pages/FindIdPwdPage";
import Home from "./pages/HomePage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import MyPageAuthPw from "./pages/MyPageAuthPwPage";
import MyPageEdit from "./pages/MyPageEditPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
import PointAndReview from "./pages/PointAndReviewPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/productlist", element: <ProductListPage /> },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
      { path: "/review/:id", element: <ProductDetailPage /> },
      { path: "/findidpwdpage", element: <FindIdPwdPage /> },
      { path: "/findidpage", element: <FindIdPage /> },
      { path: "/loginpage", element: <LoginPage /> },
      { path: "/joinpage", element: <JoinPage /> },
      { path: "/joincompletionpage", element: <JoinCompletionPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/agreespage", element: <AgreesPage /> },
      { path: "/mypage/auth_pw", element: <MyPageAuthPw /> },
      { path: "/mypage/edit", element: <MyPageEdit /> },
      { path: "/mypage/point_and_review", element: <PointAndReview /> },
      {
        path: "/changepwdcompletionpage",
        element: <ChangePwdCompletionPage />,
      },
      { path: "/paymentcompletionpage", element: <PayMentCompletionPage /> },
      { path: "/paymentorderpage", element: <PayMentOrderPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
