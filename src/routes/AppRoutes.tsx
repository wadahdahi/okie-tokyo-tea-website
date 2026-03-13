import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/common/ScrollToTop/ScrollToTop";
import { SmoothScroll } from "../components/common/Scroll/SmoothScroll";

const AppRoutes = () => {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </SmoothScroll>
  );
};

export default AppRoutes;
