import express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolver";

const app = express();
const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
});
apollo.applyMiddleware({ app });
const port = 4000;
app.listen(port, () => {
    return console.log(`server start ${port}`);
});
