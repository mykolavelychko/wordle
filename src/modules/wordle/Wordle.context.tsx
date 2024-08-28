import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import { GRID_SIZE } from "../../shared/constants";

interface WordleContextProps {
  word: string | null;
  guesses: string[];
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
  getWord: () => void;
}

const WordleContext = createContext<WordleContextProps | undefined>(undefined);

const WordleProvider = ({ children }: { children: ReactNode }) => {
  const [word, setWord] = useState<string | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);

  const getWord = () => {
    try {
      axios
        .get(`https://random-word-api.herokuapp.com/word?length=${GRID_SIZE}`)
        .then((response) => setWord(response.data[0].toUpperCase()));
    } catch (error) {
      console.error("Error fetching the word:", error);
    }
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <WordleContext.Provider
      value={{ word, guesses, setGuesses, getWord }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export { WordleContext, WordleProvider };
