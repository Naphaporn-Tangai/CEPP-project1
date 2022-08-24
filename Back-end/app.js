const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')
const app = express()
module.exports = app


async function start() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({app})

    app.listen(3000, () => {
        console.log('Server port 3000')
    })
}
start();