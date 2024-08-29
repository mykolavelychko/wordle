import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  &.game-over-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    width: 360px;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    background: #3F3A3A;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const GameOverImage = styled.img`
  width: 88px;
  height: 88px;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 12px;
`;

export const GameOverTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: center;
`;

export const GameOverMessage = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;

export const GameOverButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007aff;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.17),
    rgba(255, 255, 255, 0)
  );
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
