import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import Home from "./pages/HomePage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import MyPagePointAndReviewPage from "./pages/MyPagePointAndReviewPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import UserEditPage from "./pages/UserEditPage";
import UserPage from "./pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/productlist", element: <ProductListPage /> },
      { path: "/product/:id", element: <ProductDetailPage /> },
      { path: "/loginpage", element: <LoginPage /> },
      { path: "/joinpage", element: <JoinPage /> },
      { path: "/joincompletionpage", element: <JoinCompletionPage /> },
      { path: "/mypage", element: <MyPage />},
      { path: "/mypage/auth_pw", element: <UserPage />},
      { path: "/mypage/edit", element: <UserEditPage />},
      { path: "/mypage/point_and_review", element: <MyPagePointAndReviewPage />}
      ,
      {
        path: "/changepwdcompletionpage",
        element: <ChangePwdCompletionPage />,
      },
      { path: "/paymentcompletionpage", element: <PayMentCompletionPage /> },
      { path: "/paymentorderpage", element: <PayMentOrderPage /> },
    ],
  },
]);

export default router;
