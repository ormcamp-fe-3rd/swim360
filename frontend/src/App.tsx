import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";
import CartContextProvider from "@/contexts/CartContext";

function App() {
  return (
    <div>
      <CartContextProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </div>
  );
}
export default App;
