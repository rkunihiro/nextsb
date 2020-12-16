import { v4 as uuid } from "uuid";

import { MutationResolvers, Resolvers, QueryResolvers, Todo } from "../types";

const todoDb: Todo[] = [
    { id: uuid(), title: "alpha" },
    { id: uuid(), title: "beta" },
];

const todos: QueryResolvers["todos"] = () => {
    return todoDb;
};

const addTodo: MutationResolvers["addTodo"] = (_parent, { input }) => {
    const todo: Todo = {
        id: uuid(),
        title: input.title,
    };
    todoDb.push(todo);
    return todo;
};

export const resolvers: Resolvers = {
    Query: { todos },
    Mutation: { addTodo },
};
