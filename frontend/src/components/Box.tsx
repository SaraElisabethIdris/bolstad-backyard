import {ReactNode} from "react";
import clsx from "clsx";

type Props = {
    children: ReactNode;
    className?: string;
}

export const Box = ({children, className}: Props) => {

    return (
        <div className={clsx("p-7 m-7 rounded-2xl w-[25rem] shadow-md bg-white", className)}>
            {children}
        </div>
    );
}