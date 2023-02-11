import gql from "graphql-tag";

export const todos = gql`
    query todos {
        todos {
            id
            title
        }
    }
`;

export const addTodo = gql`
    mutation addTodo($title: String!) {
        addTodo(input: { title: $title }) {
            id
            title
        }
    }
`;
