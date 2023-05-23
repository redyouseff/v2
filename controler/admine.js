import adminemodel from "../models/adminemodel.js";
import departmentmodel from "../models/departmentmodel.js";
import doctormodel from "../models/doctormodel.js";
import studnetmodel from "../models/studnetmodel.js";
import subjectmodel from "../models/subjectmodel.js";

export const  showlogin =(req,res)=>{
    res.render("admine/login",{
        style:"/admine/login.css"
       })

}
export const loginjobs= async(req,res)=>{
    const {email,passworf}=req.body
    const element =await adminemodel.findOne({email})
    console.log(element)
    if(element!=null){
        res.render("admine/loginjobs",{
            style:"/admine/admin_jobs.css"
           })
           res.cookie("name",element)
    }
    else{
        res.send("error")
    }
 
}
export const gotoadddepartment= async(req,res)=>{
    const department =await departmentmodel.find().lean();
res.render("admine/gotoaddDE",{department})

}

export const gotostudent=(req,res)=>{
    res.render("admine/addstudent",{
        style:"/admine/addS.css"
    })

}
 export const gotoadddoctor =(req,res)=>{
    res.render("admine/adddoctor")
 }

 export const adddepartment= async(req,res)=>{
   
    const {name,code}=req.body;
    await departmentmodel.create({
        name,
        code
    })
 }
 
 export const adddsubject= async(req,res)=>{
    const {name,code,department,needed}=req.body
   await subjectmodel.create({
        name,
        code,
        department,
        needed

    })
   
 }
 export const addstudent= async(req,res)=>{
    const {name,email,password,L_id}=req.body
    await studnetmodel.create({
        name,
        email,
        password,
        L_id
    })
  

 }
 export const adddoctor = async(req,res)=>{
   const {name,email,password}=req.body
  
  
   await doctormodel.create({
    name,
    email,
    password
   })


  
 }