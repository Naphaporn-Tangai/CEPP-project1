const Post = require("./models/Post.model");
const User = require("./models/User.model")
const resolvers = 
{
    Query: {
        
        getAllPosts: async() => {
            return await Post.find();
        },
        getPost: async(_parent , {id} , _context , _info ) => {
            return await Post.findById(id);
        },
    },
    Mutation: {
        registerUser: async (parent ,args , context , info) =>{
            const { username , email , password} = args.user;
            const user = new User({ username , email , password });
            await user.save();
            return user;
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