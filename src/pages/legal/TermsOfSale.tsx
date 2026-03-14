import React from "react";

const TermsOfSale: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto bg-brand-card p-8 md:p-14 lg:p-20 rounded-4xl shadow-sm border border-brand-border">
        
        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-black text-brand-text mb-4 tracking-tight">
          Terms & Conditions of Sale
        </h1>
        <p className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-12">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* CONTENT */}
        <div className="prose prose-brand max-w-none text-brand-muted leading-relaxed">
          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By purchasing products from Okie Tokyo Tea, you agree to these Terms & Conditions of Sale. 
            We take pride in delivering the highest quality ceremonial matcha straight from Uji, Kyoto.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">2. Orders & Pricing</h2>
          <p className="mb-6">
            All prices are listed in USD unless otherwise noted. We reserve the right to modify prices 
            at any time without prior notice. Once an order is placed, you will receive a confirmation email.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">3. Shipping & Delivery</h2>
          <p className="mb-6">
            We ship globally using trusted carriers. Please ensure your shipping address is correct. 
            We are not responsible for delays caused by customs or local postal services.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">4. Quality Guarantee</h2>
          <p className="mb-6">
            Our matcha is stone-milled to order and carefully sealed. If you believe there is an issue 
            with the quality of your tea, please contact us immediately upon receipt.
          </p>

          <p className="mt-12 text-sm italic opacity-80">
            For further questions about your purchase, please contact us at hello@okietokyotea.com.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsOfSale;
