import styled from "styled-components";
import { GuessStatus } from "../../shared/constants";

const color = {
  correct: "#538D4E",
  present: "#BEA11F",
  absent: "#3A3A3C",
  wrong: "#BF5747",
  none: "transparent",
};

export const Cell = styled.div<{
  status: GuessStatus | null;
}>`
  width: 60px;
  height: 60px;
  display: inline-block;
  border: ${({ status }) => `2px solid ${status ? color.none : color.absent}`};
  border-radius: 4px;
  text-align: center;
  line-height: 60px;
  font-size: 32px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  margin: 2px;
  background-color: ${({ status }) =>
    status
      ? status === GuessStatus.Correct
        ? color.correct
        : status === GuessStatus.Present
        ? color.present
        : status === GuessStatus.Wrong ? color.wrong
        : color.absent
      : color.none};
  color: white;
`;
