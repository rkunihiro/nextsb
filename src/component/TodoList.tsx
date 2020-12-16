import React from "react";

import { useTodosQuery } from "../graphql/types";

export const TodoList: React.FC = () => {
    const { data, loading } = useTodosQuery();
    if (loading) {
        return (
            <div>Loading...</div>
        );
    }
    if (!data || !data.todos) {
        return (
            <>
                <div>No data</div>
            </>
        );
    }
    return (
        <>
            <ul>
                {data.todos.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>;
                })}
            </ul>
        </>
    );
};
