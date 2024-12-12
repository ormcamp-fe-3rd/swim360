import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
