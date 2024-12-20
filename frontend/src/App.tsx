import { Outlet } from "react-router-dom";

import CartContextProvider from "@/contexts/CartContext";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";
import IsLoginContextProvider from "./contexts/IsLoginContext";

function App() {
  return (
    <div>
      <CartContextProvider>
        <IsLoginContextProvider>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </IsLoginContextProvider>
      </CartContextProvider>
    </div>
  );
}
export default App;
