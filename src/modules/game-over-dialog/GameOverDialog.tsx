import React from "react";
import Modal from "react-modal";
import "./GameOverDialog.styles.css";
import { useTranslation } from "react-i18next";

// FIXME:
Modal.setAppElement("#root"); // Set the app element for accessibility

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
      contentLabel="Game Over"
      className="game-over-modal"
      overlayClassName="game-over-overlay"
    >
      <img
        src={`${gameResult}.svg`}
        alt="Game Over"
        className="game-over-image"
      />
      <h2>{t(`gameOver.${gameResult}.title`)}</h2>
      <p>{t(`gameOver.${gameResult}.message`)}</p>
      <button onClick={onClose}>{t("gameOver.tryAgain")}</button>
    </Modal>
  );
};

export default GameOverModal;
