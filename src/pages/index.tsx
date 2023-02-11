import Head from "next/head";

import { Button } from "../component/Button";

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>Hello</div>
            <Button>Click Here</Button>
        </>
    );
}
