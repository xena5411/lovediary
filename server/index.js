require('dotenv-defaults').config()
const { GraphQLServer, PubSub } = require('graphql-yoga')
const Query = require('./resolvers/Query.js')
const Mutation = require('./resolvers/Mutation.js')
const Subscription = require('./resolvers/Subscription.js');

const mongoose = require('mongoose')

const Message = require('./models/message')

const pubsub = new PubSub();
const server = new GraphQLServer({
    typeDefs: './server/schema.graphql' ,
    resolvers: {
      Query,
      Mutation,
      Subscription
    },
    context: {
      pubsub
    }
})



if (!process.env.MONGO_URL) {
  console.error('Missing MONGO_URL!!!')
  process.exit(1)
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (error) => {
  console.error(error)
})

db.once('open', () => {
  console.log('MongoDB connected!')

  const PORT = process.env.port || 4000

  server.start({ port: PORT}, () => {
    console.log(`The server is up to port ${PORT}!`)
  })
})
