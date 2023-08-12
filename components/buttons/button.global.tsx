import React from "react";
import { twMerge } from "tailwind-merge";

interface props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string
}

const ButtonGlobal: React.FC<props> = ({ children, type = 'button', className = "" }: props): JSX.Element => {
  return (
    <button
      className={twMerge(`relative w-auto cursor-pointer select-none rounded-[60px] 
      border-[1px] border-[#414141] bg-[#212121] px-[20px]
      text-center text-body
      h-[44px] `, className)}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonGlobal 