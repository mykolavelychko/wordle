import { GuessStatus } from '../../shared/constants';
import { Cell } from './WordleCell.styles';

interface WordleCellProps {
  letter: string;
  status: GuessStatus | null;
}

const WordleCell = ({ letter, status }: WordleCellProps) => {
  return <Cell status={status}>{letter}</Cell>;
};

export default WordleCell;