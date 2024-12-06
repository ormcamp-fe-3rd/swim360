import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/Product";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },  
  {
    path: "/product",
    element: <Product />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
