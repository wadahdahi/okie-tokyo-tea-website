import React from "react";
import { useAppSelector } from "../../shared/hooks/useAppRedux";
import { FaTruck, FaLock, FaCheckCircle } from "react-icons/fa";

const Checkout: React.FC = () => {
  const { items, totalAmount } = useAppSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mb-6">
          <FaTruck className="text-3xl text-brand-accent/40" />
        </div>
        <h2 className="text-3xl font-black text-brand-text mb-4 uppercase">Your Bag is Empty</h2>
        <p className="text-brand-muted max-w-md mx-auto mb-8">
          Add some premium matcha to your bag before proceeding to checkout.
        </p>
        <a 
          href="/products" 
          className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold uppercase tracking-wider hover:bg-brand-deep transition-all shadow-lg"
        >
          Explore Collection
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT COLUMN: FORM */}
        <div className="flex-[1.5]">
          <h1 className="text-4xl font-black text-brand-text mb-2 uppercase flex items-center gap-4">
            Shipping details <FaTruck className="text-brand-accent text-2xl" />
          </h1>
          <p className="text-brand-muted mb-10 font-medium font-outfit uppercase tracking-widest text-sm">
            Please provide your delivery information
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-brand-text uppercase ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full p-4 rounded-xl bg-brand-secondary/30 border-2 border-brand-border focus:border-brand-accent outline-none transition-all font-bold text-brand-text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-brand-text uppercase ml-1">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 234 567 890"
                className="w-full p-4 rounded-xl bg-brand-secondary/30 border-2 border-brand-border focus:border-brand-accent outline-none transition-all font-bold text-brand-text"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-black text-brand-text uppercase ml-1">Street Address</label>
              <input 
                type="text" 
                placeholder="123 Matcha Street"
                className="w-full p-4 rounded-xl bg-brand-secondary/30 border-2 border-brand-border focus:border-brand-accent outline-none transition-all font-bold text-brand-text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-brand-text uppercase ml-1">City</label>
              <input 
                type="text" 
                placeholder="Kyoto"
                className="w-full p-4 rounded-xl bg-brand-secondary/30 border-2 border-brand-border focus:border-brand-accent outline-none transition-all font-bold text-brand-text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black text-brand-text uppercase ml-1">Postal Code</label>
              <input 
                type="text" 
                placeholder="600-8216"
                className="w-full p-4 rounded-xl bg-brand-secondary/30 border-2 border-brand-border focus:border-brand-accent outline-none transition-all font-bold text-brand-text"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-black text-brand-text uppercase ml-1">Order Note (Optional)</label>
              <textarea 
                placeholder="Any special instructions for delivery..."
                rows={4}
                className="w-full p-4 rounded-xl bg-brand-secondary/30 border-2 border-brand-border focus:border-brand-accent outline-none transition-all font-bold text-brand-text resize-none"
              />
            </div>
          </form>

          <div className="mt-12 p-6 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center shrink-0">
              <FaCheckCircle className="text-white text-xl" />
            </div>
            <div>
              <h4 className="font-black text-brand-text uppercase">Payment on Delivery</h4>
              <p className="text-sm text-brand-muted font-medium">Currently, we only support cash on delivery. Pay when you receive your fresh matcha.</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SUMMARY */}
        <div className="flex-1">
          <div className="sticky top-32 p-8 rounded-3xl bg-brand-card shadow-xl border border-brand-border">
            <h3 className="text-2xl font-black text-brand-text mb-8 uppercase border-b border-brand-border pb-4">
              Your Order
            </h3>

            <div className="flex flex-col gap-4 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0 p-2 border border-brand-border">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-brand-text truncate text-sm uppercase">{item.name}</h4>
                    <p className="text-brand-accent font-bold text-xs">QTY: {item.quantity} × ${item.price}</p>
                  </div>
                  <div className="font-black text-brand-text">
                    ${(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-brand-border pt-6">
              <div className="flex justify-between items-center text-brand-muted font-bold">
                <span>Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-brand-muted font-bold">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-brand-border mt-2">
                <span className="text-xl font-black text-brand-text uppercase">Total</span>
                <span className="text-3xl font-black text-brand-accent">${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-10 py-5 bg-brand-accent text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-deep active:scale-95 transition-all shadow-xl shadow-brand-accent/20 flex items-center justify-center gap-3">
              Confirm Order <FaLock className="text-sm" />
            </button>
            <p className="text-[10px] text-center text-brand-muted mt-4 font-bold uppercase tracking-widest">
              Secure 256-bit SSL encrypted checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


