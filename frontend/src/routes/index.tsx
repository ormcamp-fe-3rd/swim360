import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AgreesPage from "./pages/AgreesPage";
import Home from "./pages/Home";
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
    path: "/AgreesPage",
    element: <AgreesPage />,
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 7f5d3cc (rename:파일이름 변경(Join > AgreesPage))
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
