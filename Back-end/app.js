const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')


mongoose.connect("mongodb+srv://adminProject:adminProject@cluster0.2dnpotc.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Mogodb connected"))
.catch((err)=>console.log('Error',err))

const schema = buildSchema(`
    type Query {
    hello: String
    }
`)

const rootValue = {
    name: () => {
        return 'root value!'
    }
}

app.use('/graphql',graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.get('/',( req, res) => {
    res.send('Hello app.js')
})

app.listen(3000, () =>{
    console.log('Server port 3000')
})