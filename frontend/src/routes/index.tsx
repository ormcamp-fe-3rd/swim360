import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import Home from "./pages/HomPage";
import JoinPage from "./pages/JoinPage";
import Login from "./pages/LoginPage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import PayMentCompletionPage from "./pages/PayMentCompletionPage";
import MyPage from "./pages/MyPage";
import Product from "./pages/Product";
import Home from "./pages/HomPage";
import ProductListPage from "./pages/ProductListPage";
import MyPage from "./pages/MyPage";


const router = createBrowserRouter([

  { path: "/", element: <Home /> },
  { path: "/productlist", element: <ProductList /> },
  { path: "/product", element: <Product /> },
  { path: "/loginpage", element: <LoginPage /> },
  { path: "/joinpage", element: <JoinPage /> },
  { path: "/joincompletionpage", element: <JoinCompletionPage /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/changepwdcompletionpage", element: <ChangePwdCompletionPage /> },
  { path: "/paymentcompletionpage", element: <PayMentCompletionPage /> },

]);

export default function Router() {
  return <RouterProvider router={router} />;
}
