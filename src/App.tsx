import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import AboutUs from "./pages/aboutUs/AboutUs";
import Main from "./pages/main/Main";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Login from "./pages/login/Login";
import CartPage from "./pages/cart/Cart";
import WishlistPage from "./pages/favorite/Favorite";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/main" element={<Main />} />
        <Route path="/test" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorito" element={<WishlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
