import { useEffect, useState } from "react";
import { WordleProvider } from "./Wordle.context";
import WordleGrid from "../WordleGrid";
// import Keyboard from '../Keyboard';

const Wordle = () => {
  // const [word, setWord] = useState<string | null>(null);

  // useEffect(() => {
  //   try {
  //     fetch("https://random-word-api.herokuapp.com/word?length=5")
  //       .then((response) => response.json())
  //       .then((data) => setWord(data[0].toUpperCase()));
  //   } catch (error) {
  //     console.error("Error fetching the word:", error);
  //   }
  // }, []);

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
