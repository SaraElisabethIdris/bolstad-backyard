import {ReactNode} from "react";
import styles from "./page-layout.module.less";

type PageLayoutProps = {
    children: ReactNode;
}

export const PageLayout = ({children}: PageLayoutProps) => (
    <div className={styles.pageLayout}>
        <h1>Bolstad Backyard</h1>
        {children}
    </div>)