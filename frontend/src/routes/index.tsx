import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AgreesPage from "./pages/AgreesPage";
import Home from "./pages/HomPage";
import JoinCompletionPage from "./pages/JoinCompletionPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
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
    path: "/joincompletionpage",
    element: <JoinCompletionPage />,
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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
