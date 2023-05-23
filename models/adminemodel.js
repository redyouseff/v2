import { Schema ,model} from "mongoose";
const admien=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        
        
    },

},{timestamps:true})
export default model("admine",admien);
