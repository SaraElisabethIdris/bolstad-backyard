import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  bodyText: string | ReactNode;
};
export const ShortInfoSection = ({ icon, title, bodyText }: Props) => {
  return (
    <div className="col-span-1 mb-4">
      <div className="size-10">{icon}</div>
      <h2 className="text-2xl font-bold font-family-serif">{title}</h2>
      <p className="text-lg font-family-serif">{bodyText}</p>
    </div>
  );
};
