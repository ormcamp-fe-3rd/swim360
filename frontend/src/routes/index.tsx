import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  { path: "/mypage", element: <MyPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
