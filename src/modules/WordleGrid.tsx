import { useContext, useEffect, useState } from "react";
import { WordleContext } from "./wordle/Wordle.context";
import WordleRow from "./WordleRow";
import { GRID_SIZE } from "../shared/constants";

interface WordleGridProps {
  onEnter: (guess: string) => void;
}

const WordleGrid = ({ onEnter }: WordleGridProps) => {
  const context = useContext(WordleContext);
  if (!context) {
    throw new Error("WordleGrid must be used within a WordleProvider");
  }
  const { word, guesses, setGuesses } = context;
  const wordArray = word?.split("") || [];

  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [results, setResults] = useState<string[][]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (currentGuess.length === GRID_SIZE) {
          const result = validateGuess(currentGuess);
          setResults([...results, result]);
          setGuesses([...guesses, currentGuess]);
          setCurrentGuess("");
        }
      } else if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, onEnter]);

  const validateGuess = (guess: string) => {
    const result = Array(5).fill("absent");
    const guessArray = guess.split("");
    const letterCount: { [key: string]: number } = {};

    guessArray.forEach((letter, index) => {
      if (letter === wordArray[index]) {
        result[index] = "correct";
        wordArray[index] = "";
      } else {
        letterCount[wordArray[index]] =
          (letterCount[wordArray[index]] || 0) + 1;
      }
    });

    guessArray.forEach((letter, index) => {
      if (result[index] !== "correct" && letterCount[letter]) {
        result[index] = "present";
        letterCount[letter]--;
      }
    });

    return result;
  };

  const rows = Array(GRID_SIZE)
    .fill("")
    .map((_, rowIndex) => {
      const guess =
        rowIndex < guesses.length
          ? guesses[rowIndex]
          : rowIndex === guesses.length
          ? currentGuess
          : "";
      const result = rowIndex < results.length ? results[rowIndex] : [];
      return <WordleRow key={rowIndex} guess={guess} result={result} />;
    });

  return <div className="wordle-grid">{rows}</div>;
};

export default WordleGrid;
