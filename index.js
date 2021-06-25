const { ApolloServer, gql } = require('apollo-server')
const getJWTPayload = require('./util/getJWTPayload')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')



const server = new ApolloServer({ typeDefs, resolvers, context: (ctx) => {
  const payload = getJWTPayload(ctx)
  return { payload,from: 'CONTEXT'}
} })


server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)

})