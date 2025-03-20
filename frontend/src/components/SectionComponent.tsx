import { React, ReactNode } from "react";


type Props = {
  icon?: ReactNode;
  title: string;
  bodyText: string;
};

export const SectionComponent = ({ icon, bodyText, title }: Props) => {
  return (
    <div className="md:col-span-1">
      <div className="size-25 bg-azure-radiance-100 rounded-full text-azure-radiance-900 p-4 flex items-center justify-center font-family-serif">
        {icon}
      </div>
      <h2 className="text-2xl font-bold font-family-serif">{title}</h2>
      <p className="text-lg font-family-serif">{bodyText}</p>
    </div>
  );
};
