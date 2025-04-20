import { PropsWithChildren } from "react";

export function ProductCardBody({ children }: PropsWithChildren) {
  return <div className="flex justify-between">{children}</div>;
}
