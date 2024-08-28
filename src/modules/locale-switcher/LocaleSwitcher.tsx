import { useTranslation } from 'react-i18next';
import './LocaleSwitcher.css';

const LocaleSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // TODO: add languages supported by random-word-api - ["es","zh","de","fr","it"]
  return (
    <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language} className="locale-switcher">
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LocaleSwitcher;