import styled from "styled-components";

const color = {
  correct: "#538D4E",
  present: "#BEA11F",
  absent: "#3A3A3C",
  none: "transparent",
};

export const Cell = styled.div<{
  status: "correct" | "present" | "absent" | null;
}>`
  width: 60px;
  height: 60px;
  display: inline-block;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 60px;
  font-size: 32px;
  font-family: "Inter", sans-serif;
  margin: 2px;
  background-color: ${({ status }) =>
    status
      ? status === "correct"
        ? color.correct
        : status === "present"
        ? color.present
        : color.absent
      : color.none};
  color: white;
`;
