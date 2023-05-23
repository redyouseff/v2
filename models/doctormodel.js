import { Schema ,model} from "mongoose";
const doctor =new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false,
      

        
    },
    
},{timestamps:true})
export default model("doctor",doctor);
