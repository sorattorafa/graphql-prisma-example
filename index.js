const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const { resolvers } = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))


/*


#create user exampe
mutation {
  createUser(name: "Bob") {
    id
  }
}

# create Draft example

mutation{
  createDraft(title: "Tile", userId: "exampleId") {
    id
    title
  }
}

#select code for post with relation author

mutation {
  publish(postId: "ck85xhr1u002p0852ds9tmoy3") {
    id
    title
    published
    author{
      id
      name
    }
  }
}
*/