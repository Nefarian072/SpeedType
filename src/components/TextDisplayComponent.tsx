import React, { Component, RefObject } from 'react';
import '../styles/TextDisplayComponent.css'; // Импортируем стили для компонента

interface TextDisplayProps {
  text: string;
}

interface TextDisplayState {
  userInput: string;
  isInputActive: boolean;
}

class TextDisplayComponent extends Component<TextDisplayProps, TextDisplayState> {
  private inputRef: RefObject<HTMLInputElement>;

  constructor(props: TextDisplayProps) {
    super(props);
    this.state = {
      userInput: '',
      isInputActive: false,
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
      this.inputRef.current.selectionStart = this.state.userInput.length;
      this.inputRef.current.selectionEnd = this.state.userInput.length;
    }
  }

  handleTextClick = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
      this.setState({ isInputActive: true });
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: event.target.value });
  };

  handleInputBlur = () => {
    this.setState({ isInputActive: false });
  };

  render() {
    const { text } = this.props;
    const { userInput, isInputActive } = this.state;

    return (
      <div
        onClick={this.handleTextClick}
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
          ref={this.inputRef}
          type="text"
          value={userInput}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          className="hidden-input"
        />
      </div>
    );
  }
}

export default TextDisplayComponent;
