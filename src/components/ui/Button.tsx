import React from 'react';
import { ButtonProps } from "@/types";

const Button = ({ type, children, ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className="ml-2 bg-blue-400 text-white rounded-full px-4 py-2"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
