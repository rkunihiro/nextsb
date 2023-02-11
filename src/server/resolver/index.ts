import { randomUUID } from "node:crypto";

import { MutationResolvers, QueryResolvers, Resolvers, Todo } from "../types";

const todoDb: Todo[] = [
    { id: randomUUID(), title: "alpha" },
    { id: randomUUID(), title: "beta" },
];

const todos: QueryResolvers["todos"] = () => {
    return todoDb;
};

const addTodo: MutationResolvers["addTodo"] = (_parent, { input }) => {
    const todo: Todo = {
        id: randomUUID(),
        title: input.title,
    };
    todoDb.push(todo);
    return todo;
};

export const resolvers: Resolvers = {
    Query: { todos },
    Mutation: { addTodo },
};
