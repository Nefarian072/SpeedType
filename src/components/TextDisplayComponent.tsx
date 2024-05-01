import React, { useState, useRef, useEffect } from 'react';
import '../styles/TextDisplayComponent.css';

interface TextDisplayProps {
  text: string;
}

const TextDisplayComponent: React.FC<TextDisplayProps> = ({ text }) => {
  const [userInput, setUserInput] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.selectionStart = userInput.length;
      inputRef.current.selectionEnd = userInput.length;
    }
  }, []);

  const handleTextClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsInputActive(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  return (
    <div
      onClick={handleTextClick}
      className={`text-display-container ${isInputActive ? 'active' : ''}`}
      style={{ cursor: 'text' }}
    >
      <div className="text-display" style={{ opacity: isInputActive ? 1 : 0.5 }}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={index < userInput.length ? (userInput[index] === char ? 'correct' : 'incorrect') : ''}
          >
            {char}
          </span>
        ))}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className="hidden-input"
      />
    </div>
  );
};

export default TextDisplayComponent;
