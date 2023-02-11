import { useState } from "react";

import { useAddTodoMutation, useTodosQuery } from "../graphql/types";

export function TodoInput(): JSX.Element {
    const [title, setTitle] = useState("");
    const { refetch } = useTodosQuery();
    const [addTodo, { loading }] = useAddTodoMutation();

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => {
                    return setTitle(e.target.value);
                }}
                disabled={loading}
            />
            <button
                onClick={async () => {
                    await addTodo({ variables: { title } });
                    setTitle("");
                    await refetch();
                }}
                disabled={loading}
            >
                Submit
            </button>
        </div>
    );
}
