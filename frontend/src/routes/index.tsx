import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import JoinPage from "./pages/JoinPage";
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
    path: "/joinpage",
    element: <JoinPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
