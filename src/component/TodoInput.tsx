import React, { useState } from "react";

import { useAddTodoMutation, useTodosQuery } from "../graphql/types";

export const TodoInput: React.FC = () => {
    const [title, setTitle] = useState("");
    const { refetch } = useTodosQuery();
    const [addTodo, { loading }] = useAddTodoMutation();

    return (
        <div>
            <input type="text" value={title} onChange={(e) => {
                return setTitle(e.target.value);
            }} disabled={loading} />
            <button
                onClick={async () => {
                    await addTodo({ variables: { title } });
                    setTitle("");
                    await refetch();
                }}
                disabled={loading}
            >Submit</button>
        </div>
    );
};
