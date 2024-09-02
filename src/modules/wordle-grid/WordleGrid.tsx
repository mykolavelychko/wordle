import { useContext, useEffect, useState } from "react";
import { WordleContext } from "../wordle/Wordle.context";
import WordleRow from "../wordle-row/WordleRow";
import { GRID_SIZE, GuessStatus } from "../../shared/constants";
import GameOverModal from "../game-over-dialog/GameOverDialog";
import { WordleGridContainer } from "./WordleGrid.styles";
import axios from "axios";

interface WordleGridProps {
  onEnter: (guess: string) => void;
}

const WordleGrid = ({ onEnter }: WordleGridProps) => {
  const context = useContext(WordleContext);
  if (!context) {
    throw new Error("WordleGrid must be used within a WordleProvider");
  }
  const { word, guesses, setGuesses, getWord } = context;
  const wordArray = word?.split("") || [];

  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [results, setResults] = useState<string[][]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [isNonexistentWord, setIsNonexistentWord] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (currentGuess.length === GRID_SIZE) {
          if (!(await isValidWord(currentGuess))) {
            setIsNonexistentWord(true);
            return;
          }
          const result = validateGuess(currentGuess);
          setResults([...results, result]);
          setGuesses([...guesses, currentGuess]);
          setCurrentGuess("");
        }
      } else if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        setIsNonexistentWord(false);
      } else if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < 5) {
        setCurrentGuess(currentGuess + event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, onEnter]);

  const isValidWord = async (word: string): Promise<boolean> => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
      );
      return response.data.length > 0;
    } catch (error) {
      console.error("Error checking word validity:", error);
      return false;
    }
  };

  const validateGuess = (guess: string) => {
    const result = Array(5).fill(GuessStatus.Absent);
    const guessArray = guess.split("");
    const letterCount: { [key: string]: number } = {};

    guessArray.forEach((letter, index) => {
      if (letter === wordArray[index]) {
        result[index] = GuessStatus.Correct;
        wordArray[index] = "";
      } else {
        letterCount[wordArray[index]] =
          (letterCount[wordArray[index]] || 0) + 1;
      }
    });

    guessArray.forEach((letter, index) => {
      if (result[index] !== GuessStatus.Correct && letterCount[letter]) {
        result[index] = GuessStatus.Present;
        letterCount[letter]--;
      }
    });

    if (result.every((r) => r === GuessStatus.Correct)) {
      setIsWinner(true);
      setIsModalOpen(true);
    } else if (results.length === GRID_SIZE - 1) {
      setIsWinner(false);
      setIsModalOpen(true);
    }

    return result;
  };

  const resetGame = () => {
    setGuesses([]);
    setResults([]);
    setCurrentGuess("");
    setIsWinner(false);
    getWord();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetGame();
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

      const result =
        rowIndex < results.length
          ? results[rowIndex]
          : currentGuess && guess === currentGuess && isNonexistentWord
          ? Array(GRID_SIZE).fill(GuessStatus.Wrong)
          : [];
      return <WordleRow key={rowIndex} guess={guess} result={result} />;
    });

  return (
    <>
      <WordleGridContainer>{rows}</WordleGridContainer>
      <GameOverModal
        isOpen={isModalOpen}
        isWinner={isWinner}
        onClose={closeModal}
      />
    </>
  );
};

export default WordleGrid;
