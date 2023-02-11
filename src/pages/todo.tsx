import { ApolloProvider } from "@apollo/client";
import Head from "next/head";

import { TodoInput } from "../component/TodoInput";
import { TodoList } from "../component/TodoList";
import { client } from "../graphql/client";

export default function Todo(): JSX.Element {
    return (
        <>
            <Head>
                <title>ToDo</title>
            </Head>
            <ApolloProvider client={client}>
                <TodoList />
                <TodoInput />
            </ApolloProvider>
        </>
    );
}
