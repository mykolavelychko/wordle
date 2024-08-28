import { WordleProvider } from "./Wordle.context";
import WordleGrid from "../wordle-grid/WordleGrid";
// import Keyboard from '../Keyboard';

const Wordle = () => {
  const handleEnter = (guess: string) => {
    console.log(guess);
  };

  return (
    <WordleProvider>
      <div className="wordle">
        <WordleGrid onEnter={handleEnter} />
        {/* <Keyboard /> */}
      </div>
    </WordleProvider>
  );
};

export default Wordle;
