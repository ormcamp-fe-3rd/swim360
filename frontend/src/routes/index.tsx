import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChangePwdCompletionPage from "./pages/ChangePwdCompletionPage";
import Home from "./pages/HomPage";
import JoinPage from "./pages/JoinPage";
import Login from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/joinpage",
    element: <JoinPage />,
  },
  { path: "/mypage", element: <MyPage /> },
  { path: "/changepwdcompletionpage", element: <ChangePwdCompletionPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
