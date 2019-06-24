const ApolloServer = require("apollo-server").ApolloServer;

const typeDefs = `
  type Query {
    rates(currency: String!): [ExchangeRate]
  }

	type ExchangeRate {
		currency: String
		rate: String
		name: String
	}
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    rates: async (root, { currency }) => {

    }
  },
  ExchangeRate: {
    name: async ({ currency }) => {
      try {
        const results = await fetch("https://api.coinbase.com/v2/currencies");
        const currencyData = await results.json();

        const currencyInfo = currencyData.data.find(
          c => c.id.toUpperCase() === currency
        );
        return currencyInfo ? currencyInfo.name : null;
      } catch (e) {
        console.error(e);
      }
    }
  }
};

const server = new ApolloServer({});
server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));
