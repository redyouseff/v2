import { Schema ,model} from "mongoose";
const student =new Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:false
        
        
    },
    L_id:{
        type:String,
        
        required:false,

    }
},{timestamps:true})
export default model("studen",student);
