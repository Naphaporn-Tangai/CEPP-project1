const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')
const mongoose = require('mongoose')
const app = express()

app.get('/',( req , res) => res.send('Mobile app'))

module.exports = app

async function start() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app: app })

    await mongoose.connect('mongodb+srv://adminProject:adminProject@cluster0.2dnpotc.mongodb.net/?retryWrites=true&w=majority',{
       useUnifiedTopology: true,
       useNewUrlParser: true
    });
    app.use('*',( req , res) => res.status(404).send('Not found'))

    app.listen(3000, () => {
        console.log('Server port 3000')
    })
}
start();