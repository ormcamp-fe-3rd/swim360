import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";
import CartContextProvider from "@/contexts/CartContext";
import CategoryContextProvider from "./contexts/CategoryContext";

function App() {
  return (
    <div>
      <CartContextProvider>
        <CategoryContextProvider>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </CategoryContextProvider>
      </CartContextProvider>
    </div>
  );
}
export default App;
