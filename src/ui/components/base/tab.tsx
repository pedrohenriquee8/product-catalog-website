import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  categorySelected: boolean;
}

export function Tab({ children, categorySelected, ...rest }: TabProps) {
  return (
    <button
      className={twMerge(
        "text-black bg-gray-100 border border-gray-300 rounded-3xl py-2 px-8 cursor-pointer transition-colors duration-300",
        categorySelected && "bg-black text-white"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
