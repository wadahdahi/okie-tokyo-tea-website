import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navLinks } from "../../../data/navData";

const Navbar = () => {
  const { t } = useTranslation();

  // MAP PATHS TO TRANSLATION KEYS
  const getTranslationKey = (label: string) => {
    return `nav.${label.toLowerCase()}`;
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-6 lg:gap-8 items-center m-0 p-0 list-none">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => `
                    relative py-2 no-underline text-brand-text font-bold text-sm lg:text-base transition-all
                    hover:text-brand-accent
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                    after:bg-brand-accent after:transition-transform after:duration-300
                    ${isActive ? "text-brand-accent after:scale-x-100" : "after:scale-x-0"}
                  `}
            >
              {t(getTranslationKey(link.label))}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
