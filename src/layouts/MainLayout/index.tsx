import React from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../Footer";
import CartPopup from "../../components/common/Cart/CartPopup";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
      <CartPopup />
    </div>
  );
};

export default MainLayout;
