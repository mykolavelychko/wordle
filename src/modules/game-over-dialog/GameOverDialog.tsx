import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";

import {
  GameOverButton,
  GameOverImage,
  GameOverMessage,
  GameOverTitle,
  StyledModal,
} from "./GameOverDialog.styles";

// Set the app element for a11y to avoid the warning regarding the screen reader sees the content behind the modal when it's open
Modal.setAppElement("#root");

interface GameOverModalProps {
  isOpen: boolean;
  isWinner: boolean;
  onClose: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({
  isOpen,
  onClose,
  isWinner,
}) => {
  const { t } = useTranslation();
  const gameResult = isWinner ? "win" : "lose";

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldFocusAfterRender={false}
      contentLabel="Game Over"
      className="game-over-modal"
      role="dialog"
      aria-labelledby="game-over-title"
      aria-describedby="game-over-message"
    >
      <GameOverImage
        src={`${gameResult}.svg`}
        alt="Game Over"
        className="game-over-image"
      />
      <GameOverTitle id="game-over-title">
        {t(`gameOver.${gameResult}.title`)}
      </GameOverTitle>
      <GameOverMessage id="game-over-message">
        {t(`gameOver.${gameResult}.message`)}
      </GameOverMessage>
      <GameOverButton
        onClick={onClose}
        aria-label={t("gameOver.tryAgain")}
        tabIndex={0}
      >
        {t("gameOver.tryAgain")}
      </GameOverButton>
    </StyledModal>
  );
};

export default GameOverModal;
