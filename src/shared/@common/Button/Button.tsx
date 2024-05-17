import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="w-[343px]" {...props}>
      {children}
    </button>
  );
};

export default Button;
