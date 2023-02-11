import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";

import { resolvers } from "./resolver";
import { typeDefs } from "./typeDefs";

async function main(port: number) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();

    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(
        cors({
            origin: "*",
        }),
    );
    app.get("/", (_req, res) => {
        res.json({ status: "ok" });
    });
    app.all("/graphql", expressMiddleware(server));
    app.all("*", (_req, res) => {
        res.status(404).send("Not found");
    });
    app.listen(port, () => {
        return console.log(`server start http://localhost:${port}`);
    });
}

main(4000);
