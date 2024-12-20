import { Outlet } from "react-router-dom";

import CartContextProvider from "@/contexts/CartContext";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";
import CategoryContextProvider from "./contexts/CategoryContext";
import UserContextProvider from "./contexts/UserContext";



function App() {
  return (
    <div>
      <CartContextProvider>
        <CategoryContextProvider>
         <UserContextProvider>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
          </UserContextProvider>
        </CategoryContextProvider>
      </CartContextProvider>
    </div>
  );
}
export default App;
