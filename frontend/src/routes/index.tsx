import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productlist",
    element: <ProductList />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/paymentorderpage",
    element: <PayMentOrderPage />,
  },
  {
    path: "/joinpage",
    element: <JoinPage />,
  },
  { path: "/mypage", element: <MyPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
