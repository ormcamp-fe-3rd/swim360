import { Outlet } from "react-router-dom";

import CartContextProvider from "@/contexts/CartContext";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <div>
      <CartContextProvider>
          <UserContextProvider>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
          </UserContextProvider>
      </CartContextProvider>
    </div>
  );
}
export default App;
