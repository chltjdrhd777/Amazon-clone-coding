import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/server/schema.graphql",
  resolvers: resolvers,
});

server.start(() => console.log("server is activated"));
