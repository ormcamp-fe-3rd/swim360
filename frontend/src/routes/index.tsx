import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AgreesPage from "./pages/AgreesPage";
import FindIdPage from "./pages/FindIdPage";
import FindIdPwdPage from "./pages/FindIdPwdPage";
import FindPwdPage from "./pages/FindPwdPage";
import Home from "./pages/Home";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import PayMentOrderPage from "./pages/PayMentOrderPage";
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
  {
    path: "/findidpage",
    element: <FindIdPage />,
  },
  {
    path: "/findpwdpage",
    element: <FindPwdPage />,
  },
  {
    path: "/paymentorderpage",
    element: <PayMentOrderPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
