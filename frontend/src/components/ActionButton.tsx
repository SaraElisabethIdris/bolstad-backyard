import { ReactNode } from "react";
import styles from "./action-button.module.less";
import { Spinner } from "./Spinner.tsx";

type Props = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick: () => void;
  isLoading?: boolean;
};

export const ActionButton = ({ children, onClick, type, isLoading }: Props) => {
  return (
    <button
      onClick={onClick}
      className={styles.actionButton}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
