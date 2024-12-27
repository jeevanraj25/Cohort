import mongoose from "mongoose";

mongoose.connect('mongodb+srv://jeevanraj:%235GiYCKa%23nHL6yG@cluster0.3usrw2t.mongodb.net/user_app');

const TodoSchema =new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})


const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);


export default Todo