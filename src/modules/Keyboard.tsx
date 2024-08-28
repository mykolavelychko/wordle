interface KeyboardProps {
  onKeyPress: (key: string) => void;
  onEnter: () => void;
}

const Keyboard = ({ onKeyPress, onEnter }: KeyboardProps) => {
  const keys = [
    'QWERTYUIOP'.split(''),
    'ASDFGHJKL'.split(''),
    'ZXCVBNM'.split(''),
  ];

  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button key={key} className="keyboard-key" onClick={() => onKeyPress(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
      <button className="keyboard-key" onClick={onEnter}>Enter</button>
    </div>
  );
};

export default Keyboard;