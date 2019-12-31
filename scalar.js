const { ApolloServer, gql } = require("apollo-server");

// MDN: Tagged templates
const typeDefs = gql`
  type Query {
    user(id: ID!): Users
  }

  type User {
    id: ID # unique identifier
    name: String # UTF-8 string
    age: Int # signed 32-bit integer
    salary: Float # signed double-precision float
    isManager: Boolean # true or false
    birthday: Date
    gender: Gender
  }
  scalar Date

  enum Gender {
    MALE
    FEMALE
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// Javascript(Ruby, Go) -> [GraphQL] -> JSON -> [GraphQL] -> Javascript(Swift,Kotlin)
