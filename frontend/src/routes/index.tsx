import { createBrowserRouter } from "react-router-dom";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";

<<<<<<< HEAD
import AgreesPage from "./pages/AgreesPage";
import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import Home from "./pages/HomPage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
=======
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
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d

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
<<<<<<< HEAD
  {
    path: "/productlist",
    element: <ProductList />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/joincompletionpage",
    element: <JoinCompletionPage />,
  },
  {
    path: "/changepwdcompletionpage",
    element: <ChangePwdCompletionPage />,
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/agreespage",
    element: <AgreesPage />,
  },
  {
    path: "/joinpage",
    element: <JoinPage />,
  },
  { path: "/mypage", element: <MyPage /> },
=======
>>>>>>> d38d77e4f3f4714e36f6b3ad5ac89dbfc1719a0d
]);

export default router;
