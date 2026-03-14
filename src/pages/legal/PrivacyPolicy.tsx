import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto bg-brand-card p-8 md:p-14 lg:p-20 rounded-4xl shadow-sm border border-brand-border">
        
        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-black text-brand-text mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-brand-accent font-bold text-sm tracking-widest uppercase mb-12">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* CONTENT */}
        <div className="prose prose-brand max-w-none text-brand-muted leading-relaxed">
          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            When you visit Okie Tokyo Tea, we collect certain information about your device, your 
            interaction with the site, and the information necessary to process your purchases. We 
            may also collect additional information if you contact us for customer support.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use your personal data to provide products and services to you, to communicate with you, 
            to screen our orders for potential risk or fraud, and, when in line with the preferences 
            you have shared with us, to provide you with information relating to our products or services.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">3. Data Sharing</h2>
          <p className="mb-6">
            We share your personal information only with service providers that help us fulfill our 
            services (such as shipping carriers and payment processors). We may also share information 
            to comply with applicable laws and regulations.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">4. Your Rights</h2>
          <p className="mb-6">
            If you are a resident of the European Economic Area (EEA), the California region, or other 
            regions with specific privacy laws, you have the right to access the personal information 
            we hold about you and to ask that it be corrected, updated, or erased.
          </p>

          <p className="mt-12 text-sm italic opacity-80">
            To exercise your rights or if you have any questions, please contact hello@okietokyotea.com.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
