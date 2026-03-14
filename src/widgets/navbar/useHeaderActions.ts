import { useTranslation } from "react-i18next";
import { useTheme } from "../../app/providers/ThemeContext";
import { useAppDispatch } from "../../shared/hooks/useAppRedux";
import { toggleCart } from "../../shared/lib/uiSlice";

export const useHeaderActions = () => {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleToggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return {
    currentLang: i18n.language,
    theme,
    changeLanguage,
    handleToggleTheme,
    handleToggleCart
  };
};



