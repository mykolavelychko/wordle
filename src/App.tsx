import "./App.css";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./modules/LocaleSwitcher";
import Wordle from "./modules/wordle/Wordle";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <h1>{t("welcome")}</h1>
        <LocaleSwitcher />
      </header>
      <main>
        <Wordle />
      </main>
    </div>
  );
}

export default App;
