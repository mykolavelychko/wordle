import { GRID_SIZE } from "../../shared/constants";
import WordleCell from "../wordle-cell/WordleCell";
import { WordleRowContainer } from "./WordleRow.styles";

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

  return <WordleRowContainer>{cells}</WordleRowContainer>;
};

export default WordleRow;
