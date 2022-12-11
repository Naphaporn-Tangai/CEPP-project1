const { gql } = require('apollo-server-express')

const typeDefs = gql` 
    type Query {
        getAllPosts: [Post]
        getPost(id: ID): Post
        user(id: ID): User
    }
    type Mutation {
        registerUser( user: RegisterInput): User
        loginUser (loginInput: LoginInput): User ok, what is user.token?
        createPost( post: PostInput ): Post
        deletePost( id: ID): String
        updatePost( id: ID ,post: PostInput): Post
    }
    type User {
        id: ID!
        username: String
        email: String
        password: String
        phonenumber: String
        token: String
    }

    input RegisterInput {
        username: String
        email: String
        password: String
        phonenumber: String
    }

    input LoginInput {
        email: String
        password: String
    }


    type Post {
        id: ID!
        title: String
        description: String
        postHome: String
    } 

   
    input PostInput {
        title: String
        description: String
        postHome: String
    }
   
`
module.exports = {typeDefs}