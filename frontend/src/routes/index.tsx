import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import Home from "./pages/HomPage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import MyPagePointAndReviewPage from "./pages/MyPagePointAndReviewPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
import Product from "./pages/Product";
import ProductListPage from "./pages/ProductListPage";
import UserEditPage from "./pages/UserEditPage";
import UserPage from "./pages/UserPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/productlist", element: <ProductListPage /> },
  { path: "/product", element: <Product /> },
  { path: "/loginpage", element: <LoginPage /> },
  { path: "/joinpage", element: <JoinPage /> },
  { path: "/joincompletionpage", element: <JoinCompletionPage /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/user", element: <UserPage />},
  { path: "/user/edit", element: <UserEditPage />},
  { path: "/points-and-reviews", element: <MyPagePointAndReviewPage />},
  { path: "/changepwdcompletionpage", element: <ChangePwdCompletionPage /> },
  { path: "/paymentcompletionpage", element: <PayMentCompletionPage /> },
  { path: "/paymentorderpage", element: <PayMentOrderPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
