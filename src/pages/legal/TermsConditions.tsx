import React from "react";

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto bg-brand-card p-8 md:p-14 lg:p-20 rounded-4xl shadow-sm border border-brand-border">
        
        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-black text-brand-text mb-4 tracking-tight">
          Website Terms & Conditions
        </h1>
        <p className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-12">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* CONTENT */}
        <div className="prose prose-brand max-w-none text-brand-muted leading-relaxed">
          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">1. Use of the Website</h2>
          <p className="mb-6">
            Welcome to Okie Tokyo Tea. By accessing and browsing our website, you agree to comply with 
            and be bound by these Terms & Conditions. If you disagree with any part of these terms, 
            please do not use our website.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-6">
            All content on this website, including texts, imagery, graphics, logos, and design elements, 
            is the property of Okie Tokyo Tea and is protected by applicable intellectual property laws. 
            Unauthorized reproduction or distribution is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">3. User Conduct</h2>
          <p className="mb-6">
            You agree not to use the website in any way that disrupts access or damages the application, 
            or for any fraudulent or unlawful purposes. You are solely responsible for all content you 
            submit or transmit via our channels.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">4. Limitation of Liability</h2>
          <p className="mb-6">
            We strive to provide accurate content on our site, but we do not guarantee its completeness 
            or accuracy. Okie Tokyo Tea is not responsible for any direct or indirect damages that result 
            from the use of our website or the purchase of our products.
          </p>

          <p className="mt-12 text-sm italic opacity-80">
            If you have questions about these terms, please contact us at hello@okietokyotea.com.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsConditions;
