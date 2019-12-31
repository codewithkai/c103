const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const typeDefs = importSchema("starwar.graphql");

const server = new ApolloServer({ typeDefs, mock: true });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
