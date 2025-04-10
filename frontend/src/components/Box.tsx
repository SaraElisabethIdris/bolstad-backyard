import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Box = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};
