import { gql } from "graphql-tag";

export const typeDefs = gql`
    type Todo {
        id: String!
        title: String!
    }

    type Query {
        todos: [Todo!]!
    }

    input TodoInput {
        title: String!
    }

    type Mutation {
        addTodo(input: TodoInput!): Todo
    }

    type schema {
        query: Query
        mutation: Mutation
    }
`;
