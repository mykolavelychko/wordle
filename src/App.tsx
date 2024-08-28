import "./App.css";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./modules/locale-switcher/LocaleSwitcher";
import Wordle from "./modules/wordle/Wordle";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <Wordle />
      </main>
      <footer>
        <LocaleSwitcher />
      </footer>
    </div>
  );
}

export default App;
