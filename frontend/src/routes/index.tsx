import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/HomPage";
import JoinPage from "./pages/JoinPage";
import Login from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import MyPageEdit from "./pages/MyPageEdit";
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
  { path: "/mypage", 
    element: <MyPage /> 
  },
  { path: "/mypage/edit",
    element: <MyPageEdit />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
