import React, { createContext, useState, ReactNode, useEffect } from "react";

interface WordleContextProps {
  word: string | null;
  guesses: string[];
  setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
}

const WordleContext = createContext<WordleContextProps | undefined>(undefined);

const WordleProvider = ({ children }: { children: ReactNode }) => {
  const [word, setWord] = useState<string | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);

  useEffect(() => {
    try {
      fetch("https://random-word-api.herokuapp.com/word?length=5")
        .then((response) => response.json())
        .then((data) => setWord(data[0].toUpperCase()));
    } catch (error) {
      console.error("Error fetching the word:", error);
    }
  }, []);

  return (
    <WordleContext.Provider value={{ word, guesses, setGuesses }}>
      {children}
    </WordleContext.Provider>
  );
};

export { WordleContext, WordleProvider };
