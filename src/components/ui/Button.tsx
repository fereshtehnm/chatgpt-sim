import React from 'react';
import { ButtonProps } from "@/types";

const Button = ({ type, children, ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className="ml-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
