import { useTranslation } from 'react-i18next';

const LocaleSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // TODO: add languages supported by random-word-api - ["es","zh","de","fr","it"]
  return (
    <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default LocaleSwitcher;