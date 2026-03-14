import React from "react";
import Header from "../../widgets/navbar/Header";
import Footer from "../../widgets/footer";
import CartPopup from "../../shared/components/CartPopup";
import BackToTop from "../../shared/components/BackToTop/BackToTop";
import ToastContainer from "../../shared/components/Toast/ToastContainer";
import AIAssistant from "../../features/ai-assistant/components/AIAssistant";

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
      <BackToTop />
      <ToastContainer />
      <AIAssistant />
    </div>
  );
};

export default MainLayout;
