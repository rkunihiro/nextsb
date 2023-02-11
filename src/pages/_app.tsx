import { AppProps } from "next/app";

import "./styles.scss";

export function App({ Component, pageProps }: AppProps): JSX.Element {
    console.log(`App`);
    return <Component {...pageProps} />;
}

export default App;
