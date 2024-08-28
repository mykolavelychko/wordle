import { Cell } from './WordleCell.styles';

interface WordleCellProps {
  letter: string;
  status: 'correct' | 'present' | 'absent' | null;
}

const WordleCell = ({ letter, status }: WordleCellProps) => {
  return <Cell status={status}>{letter}</Cell>;
};

export default WordleCell;