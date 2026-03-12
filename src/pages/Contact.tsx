import React from "react";
import SectionHeader from "../components/common/UI/SectionHeader";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <SectionHeader
        title="Connect With Us"
        subtitle="Have questions about our ceremonial-grade matcha or your order? Our dedicated team is here to assist you on your Zen journey."
        hasBorder
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12">
        {/* LEFT: INFO */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl font-black text-brand-text uppercase mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center shrink-0 border border-brand-border">
                  <FaEnvelope className="text-brand-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-brand-text uppercase text-sm">Email Support</h4>
                  <p className="text-brand-muted font-medium">hello@okietokyotea.com</p>
                  <p className="text-xs text-brand-accent font-bold mt-1 uppercase tracking-widest">Response within 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center shrink-0 border border-brand-border">
                  <FaWhatsapp className="text-brand-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-brand-text uppercase text-sm">WhatsApp</h4>
                  <p className="text-brand-muted font-medium">+81 75-123-4567</p>
                  <p className="text-xs text-brand-accent font-bold mt-1 uppercase tracking-widest">Available 9am - 6pm JST</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center shrink-0 border border-brand-border">
                  <FaMapMarkerAlt className="text-brand-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-brand-text uppercase text-sm">Our Origin</h4>
                  <p className="text-brand-muted font-medium">Uji, Kyoto Prefecture 611-0021</p>
                  <p className="text-brand-muted font-medium italic">Honshu Island, Japan</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center shrink-0 border border-brand-border">
                  <FaClock className="text-brand-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-brand-text uppercase text-sm">Working Hours</h4>
                  <p className="text-brand-muted font-medium">Mon - Fri: 09:00 - 18:00 (JST)</p>
                  <p className="text-brand-muted font-medium">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-brand-accent text-white rounded-4xl shadow-xl shadow-brand-accent/20">
            <h3 className="text-xl font-black uppercase mb-4 tracking-wider">Visit Our Fields</h3>
            <p className="font-medium text-white/80 leading-relaxed mb-6">
              Experience the mist-covered hills of Kyoto. We offer private tea ceremony sessions and tasting tours for true enthusiasts.
            </p>
            <button className="px-6 py-3 bg-white text-brand-accent font-black uppercase text-xs rounded-xl hover:bg-brand-secondary transition-all">
              Book a Visit
            </button>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="bg-brand-card p-10 rounded-[3rem] border border-brand-border shadow-2xl">
          <h2 className="text-2xl font-black text-brand-text uppercase mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-brand-text uppercase ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="bg-brand-secondary/30 p-4 rounded-xl border-2 border-brand-border focus:border-brand-accent outline-none font-bold text-brand-text transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-brand-text uppercase ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-brand-secondary/30 p-4 rounded-xl border-2 border-brand-border focus:border-brand-accent outline-none font-bold text-brand-text transition-all"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-brand-text uppercase ml-1">Subject</label>
              <select 
                title="Inquiry Subject"
                className="bg-brand-secondary/30 p-4 rounded-xl border-2 border-brand-border focus:border-brand-accent outline-none font-bold text-brand-text transition-all appearance-none cursor-pointer"
              >
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Wholesale/B2B</option>
                <option>Tea Ceremony Tours</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-brand-text uppercase ml-1">Message</label>
              <textarea 
                placeholder="How can we help you?"
                rows={5}
                className="bg-brand-secondary/30 p-4 rounded-xl border-2 border-brand-border focus:border-brand-accent outline-none font-bold text-brand-text transition-all resize-none"
              />
            </div>

            <button className="w-full py-5 bg-brand-accent text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-deep active:scale-95 transition-all shadow-xl shadow-brand-accent/20">
              Deliver Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
