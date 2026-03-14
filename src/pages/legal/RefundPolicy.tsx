import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto bg-brand-card p-8 md:p-14 lg:p-20 rounded-4xl shadow-sm border border-brand-border">
        
        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-black text-brand-text mb-4 tracking-tight">
          Refunds & Return Policy
        </h1>
        <p className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-12">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* CONTENT */}
        <div className="prose prose-brand max-w-none text-brand-muted leading-relaxed">
          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">1. Returning an Item</h2>
          <p className="mb-6">
            We hold our matcha to the highest standards. Due to the nature of our products, we are unable 
            to accept returns on opened tea. However, unopened items in original condition may be returned 
            within 14 days of delivery.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">2. Defective or Damaged Goods</h2>
          <p className="mb-6">
            If your package arrives damaged or you believe the matcha quality is compromised, please contact 
            us within 48 hours of delivery. We will request photos and happily issue a replacement or refund.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">3. Refund Processing</h2>
          <p className="mb-6">
            Once a return or cancellation is approved, refunds will automatically be processed to your 
            original payment method. Please note it may take 5–10 business days for the funds to appear 
            on your statement depending on your bank.
          </p>

          <p className="mt-12 text-sm italic opacity-80">
            For return requests or questions regarding shipping damages, please contact hello@okietokyotea.com.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;
