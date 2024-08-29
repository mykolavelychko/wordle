import React from "react";
import Modal from "react-modal";
import "./GameOverDialog.css";
import { useTranslation } from "react-i18next";

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldFocusAfterRender={false}
      contentLabel="Game Over"
      className="game-over-modal"
      overlayClassName="game-over-overlay"
      role="dialog"
      aria-labelledby="game-over-title"
      aria-describedby="game-over-message"
    >
      <img
        src={`${gameResult}.svg`}
        alt="Game Over"
        className="game-over-image"
      />
      <h2 id="game-over-title">{t(`gameOver.${gameResult}.title`)}</h2>
      <p id="game-over-message">{t(`gameOver.${gameResult}.message`)}</p>
      <button
        onClick={onClose}
        aria-label={t("gameOver.tryAgain")}
        tabIndex={0}
      >
        {t("gameOver.tryAgain")}
      </button>
    </Modal>
  );
};

export default GameOverModal;
