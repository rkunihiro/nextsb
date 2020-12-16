import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";

import { client } from "../graphql/client";
import { TodoList } from "../component/TodoList";
import { TodoInput } from "../component/TodoInput";

const Todo: React.FC = () => {
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
};

export default Todo;
