import React from "react";
import { FaInstagram, FaLeaf, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerNavData } from "../../data/footerData";
import Logo from "../../components/common/UI/Logo/Logo";

const Footer: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    FaInstagram,
    FaFacebook,
    FaTwitter,
  };

  return (
    <footer className="bg-brand-secondary pt-24 pb-12 px-8 md:px-12 2xl:px-24 border-t border-brand-border transition-all">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="max-w-xs">
          <Logo className="w-[260px]" />
          <p className="text-brand-muted leading-relaxed mb-10 pl-[10px] font-medium">
            Elevating the ancient tradition of Japanese matcha to a modern
            mindful ritual. Pure, authentic, and sourced directly from Uji.
          </p>
          <div className="flex gap-6">
            {footerNavData.socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.platform}
                  href={social.path}
                  className="text-brand-text text-2xl hover:text-brand-accent hover:-translate-y-1 transition-all"
                  aria-label={social.platform}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-[18px] font-black uppercase tracking-[0.2em] mb-8 text-brand-text/50">
            Quick Links
          </h4>
          <ul className="space-y-2 list-none p-0 m-0">
            {footerNavData.quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="w-fit text-brand-muted no-underline hover:text-brand-accent transition-colors font-bold block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[18px] font-black uppercase tracking-[0.2em] mb-8 text-brand-text/50">
            Guide
          </h4>
          <ul className="space-y-2 list-none p-0 m-0">
            {footerNavData.guides.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="w-fit text-brand-muted no-underline hover:text-brand-accent transition-colors font-bold block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[18px] font-black uppercase tracking-[0.2em] mb-8 text-brand-text/50">
            Contact
          </h4>
          <div className="space-y-2">
            <div>
              <p className="text-brand-text font-black text-sm uppercase tracking-wider">
                Origin
              </p>
              <p className="text-brand-muted font-bold italic">
                Uji, Kyoto, Japan
              </p>
            </div>
            <div>
              <p className="text-brand-text font-black text-sm uppercase tracking-wider">
                Email
              </p>
              <Link
                to=""
                className="text-brand-muted font-bold underline hover:text-brand-accent transition-colors cursor-pointer"
              >
                hello@okietokyotea.com
              </Link>
            </div>
            <div className="pt-4">
              <span className="bg-brand-accent text-white px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-lg shadow-brand-accent/20">
                Stay Pure. Drink Matcha.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto border-t border-brand-border mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-muted font-black tracking-widest uppercase opacity-60">
        <p>© {new Date().getFullYear()} Okie Tokyo Tea. All rights reserved.</p>
        <p>Designed with Zen and Purity in Japan.</p>
      </div>
    </footer>
  );
};

export default Footer;
