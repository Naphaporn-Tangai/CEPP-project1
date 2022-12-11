const Post = require("./models/Post.model");
const User = require("./models/User.model")
const { ApolloError } = require('apollo-server-errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const checkAuth = require('../../util/auth');

const resolvers = 
{
    Query: {
        
        getAllPosts: async() => {
            return await Post.find();
        },
        getPost: async(_parent , {id} , _context , _info ) => {
            return await Post.findById(id);
        },
        
        user: async(_parent , {id} , _context , _info ) => {
            const user = checkAuth( _context);
            try {
                const user_ = await User.findById(id)
                if (user_) {
                    return user_;
                } else {
                    throw new Error('User not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    
    Mutation: {
        registerUser: async (parent ,args , context , info) =>{
            const { username , email , password , phonenumber} = args.user;
            const newUser = new User({ 
                username: username, 
                email: email.toLowerCase() , 
                password ,
                phonenumber ,
            });
            
            // Check and old user exists with email attemping to register
            const oldUser = await User.findOne({ email });
            // Throw error if user exists
            if(oldUser){
                throw new ApolloError('A user is already registered with the email' + email, 'USER_ALREADY_EXISTS')
            }
            // Encrypt password
            var encryptedPassword = await bcrypt.hash(password, 10)
           
           
            const token = jwt.sign(
                {  user_id: newUser._id, email },
                "UNSAFE_STRING",
                {
                    expiresIn: "5h"
                }
            )
            newUser.token = token;

            const res = await user.save();
            return { id: res.id , ...res._doc};
        },
        loginUser: async (parent ,args , context , info) =>{
            const {  email , password} = args.loginInput;
            // Check and old user exists with email attemping to register
            const user = await User.findOne({ email });
            // Throw error if user exists
            if (user && (await bcrypt.compare(password , user.password))){
                  const token = jwt.sign(
                {  user_id: user._id, email },
                "UNSAFE_STRING",
                {
                    expiresIn: "2h"
                }
            );
             user.token = token; 

             return { 
                id: res.id , ...res._doc
            } 
        
            } else {
                throw new ApolloError("Incorrect passwoed","INCRRECT_PASSWORD");
            }
            
           
        },

        createPost: async (parent ,args , context , info) =>{
            const { title , description , postHome} = args.post;
            const post = new Post({ title , description , postHome });
            await post.save();
            return post;
        },
        deletePost: async ( parent ,args , context , info ) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "Ok , post deleted";
        },
        updatePost: async ( parent ,args , context , info ) => {
            const { id } = args;
            const { title , description , postHome} = args.post;
            const updates = {}
            if(title !== undefined){
                updates.title = title
            }
            if(description !== undefined){
                updates.description = description
            }
            const post =await Post.findByIdAndUpdate(
                id,
                updates,
                { new : true}    
            );
            return post;
        }
    }
};
module.exports = { resolvers };