import { Routes, Route } from "react-router-dom";
import MainLayout from "../providers/MainLayout";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import Checkout from "../../pages/checkout/Checkout";
import Contact from "../../pages/contact/Contact";
import Blog from "../../pages/blog/Blog";
import OurStory from "../../pages/our-story/OurStory";
import BrewingGuide from "../../pages/brewing-guide/BrewingGuide";
import BlogPostDetail from "../../pages/blog/BlogPostDetail";
import ScrollToTop from "../../shared/components/ScrollToTop";
import { SmoothScroll } from "../../shared/components/SmoothScroll";

import TermsOfSale from "../../pages/legal/TermsOfSale";
import RefundPolicy from "../../pages/legal/RefundPolicy";
import TermsConditions from "../../pages/legal/TermsConditions";
import PrivacyPolicy from "../../pages/legal/PrivacyPolicy";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/brewing-guide" element={<BrewingGuide />} />
          <Route path="/terms-of-sale" element={<TermsOfSale />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </MainLayout>
    </SmoothScroll>
  );
};

export default AppRoutes;
