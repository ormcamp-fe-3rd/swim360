import { Outlet } from "react-router-dom";

import CartContextProvider from "@/contexts/CartContext";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";
import CategoryContextProvider from "./contexts/CategoryContext";
import UserIdContextProvider from "./contexts/UserIdContext";

function App() {
  return (
    <div>
      <CartContextProvider>
        <CategoryContextProvider>
          <UserIdContextProvider>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
          </UserIdContextProvider>
        </CategoryContextProvider>
      </CartContextProvider>
    </div>
  );
}
export default App;
