import { GRID_SIZE } from "../shared/constants";
import WordleCell from "./wordle-cell/WordleCell";

interface WordleRowProps {
  guess: string;
  result: any[]; // TODO: add proper type
}

const WordleRow = ({ guess, result }: WordleRowProps) => {
  const cells = Array(GRID_SIZE)
    .fill("")
    .map((_, index) => (
      <WordleCell
        key={index}
        letter={guess[index] || ""}
        status={result[index] || null}
      />
    ));

  return <div className="wordle-row">{cells}</div>;
};

export default WordleRow;
