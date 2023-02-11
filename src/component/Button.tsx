import type { PropsWithChildren } from "react";

import styles from "./Button.module.scss";

export function Button({ children }: PropsWithChildren): JSX.Element {
    return (
        <>
            <div className={styles.button}>
                <span data-testid="buttonLabel">{children}</span>
            </div>
        </>
    );
}
