import { Outlet } from "react-router-dom";

import CartContextProvider from "@/contexts/CartContext";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";

import CartContextProvider from "@/contexts/CartContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import IsLoginContextProvider from "./contexts/IsLoginContext";


function App() {
  return (
    <div>
      <CartContextProvider>
        <CategoryContextProvider>
        <IsLoginContextProvider>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </CategoryContextProvider>
        </IsLoginContextProvider>
      </CartContextProvider>
    </div>
  );
}
export default App;
