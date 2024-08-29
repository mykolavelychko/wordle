import { styled } from "styled-components";

export const WordleGridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  margin: 20% auto;
  max-width: 380px;
`;