import * as React from "react";
import NextApp, { AppProps } from 'next/app'

import "./styles.scss";

export const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
    console.log(`App`);
    return (
        <Component {...pageProps} />
    );
};

export default App;
