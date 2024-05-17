import React from 'react';

interface TextBoxProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ text, onClick, className }) => {
  return (
    <div
      className={`rounded-[10px] border p-4 ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {text}
    </div>
  );
};

export default TextBox;
