import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/contact"
          element={<div>Contact Page (Coming Soon)</div>}
        />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
