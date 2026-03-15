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
      <div className="fixed bottom-10 right-6 lg:right-10 z-10005 flex flex-col items-center gap-4">
        <AIAssistant />
        <BackToTop />
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
