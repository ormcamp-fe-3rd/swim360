import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AgreesPage from "./pages/AgreesPage";
import FindIdPwdPage from "./pages/FindIdPwdPage";
import Home from "./pages/Home";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
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
  {
    path: "/findidpwdpage",
    element: <FindIdPwdPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
