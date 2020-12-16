import React from "react";
import Head from "next/head";

import { Button } from "../component/Button";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>Hello</div>
            <Button>Click Here</Button>
        </>
    );
};

export default Home;
