import { PropsWithChildren } from "react";

export function ProductCardRoot({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4 w-full cursor-pointer max-w-80 hover:scale-105 transition-transform duration-500 ease-in-out">
      {children}
    </div>
  );
}
