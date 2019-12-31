const { ApolloServer, gql } = require("apollo-server");

const db = require("./db");

const typeDefs = gql`
  type Query {
    human(id: ID!): Human
  }

  type Human {
    id: ID!
    name: String!
    appearsIn: [Episode]
    starships: [Starship]
  }

  enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
  }

  type Starship {
    id: ID!
    name: String
  }
`;

const resolvers = {
  Query: {
    async human(parent, args, context, info) {
      // Data can from all kinds of sources: DATABASE, REST, gRPC, GraphQL
      // console.log(parent);
      // console.log(args);
      // console.log(context);
      // console.log(info);
      const human = await context.db.loadHumanByID(args.id);
      //do something else
      return human;
    }
  },
  Human: {
    name(parent, args, context, info) {
      // console.log(parent);
      // console.log(args);
      return parent.name;
    },
    id(parent, args, context, info) {
      return parent.id;
    },
    appearsIn(parent, args, context, info) {
      return parent.appearsIn;
    },
    starships(parent, args, context, info) {
      return parent.starships.map(starshipID =>
        context.db.loadStarshipByID(starshipID)
      );
    }
  },
  Starship: {
    name(parent, args, context, info) {
      return "-->" + parent.name;
    },
    id(parent, args, context, info) {
      return parent.id;
    }
  },
  Episode: {
    NEWHOPE: 1,
    EMPIRE: 2,
    JEDI: 3
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db, userId: 123 })
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
