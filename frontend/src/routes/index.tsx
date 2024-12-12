import { createBrowserRouter } from "react-router-dom";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";

import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import MyPage from "./pages/MyPage";

import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
import App from "@/App";
import Home from "./pages/HomePage";

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
      { path: "/mypage", element: <MyPage /> },
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
