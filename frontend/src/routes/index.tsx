import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/HomePage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";

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
      { path: "*", element: < ErrorPage/>}
    ],
  },
]);

export default router;
