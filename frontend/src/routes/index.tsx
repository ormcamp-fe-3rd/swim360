import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/HomPage";
import ProductList from "./pages/ProductList";


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
