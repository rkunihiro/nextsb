import * as React from "react";
import { AppProps } from "next/app";

import "./styles.scss";

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    console.log(`App`);
    return (
        <Component {...pageProps} />
    );
};

export default App;
