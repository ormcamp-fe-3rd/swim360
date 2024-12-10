import { createBrowserRouter, RouterProvider } from "react-router-dom";

import JoinPage from "./pages/JoinPage";
import Login from "./pages/LoginPage";
import Product from "./pages/Product";
import Home from "./pages/HomPage";

import ProductList from "./pages/ProductList";
import MyPage from "./pages/MyPage";


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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
