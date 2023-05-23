import { Schema ,model} from "mongoose";
const subject =new Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        required:false,
        ref: "department"

        
    },
    doctor:{
        type:Schema.Types.ObjectId,
        required:false,
        ref: "doctor"

    },
    needed:{
        type:String,
        required:false

    }
},{timestamps:true})
export default model("subject",subject);
