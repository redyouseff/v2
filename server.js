import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import adminemodel from "./models/adminemodel.js";
import adminerouter from"./route/adminerouter.js";
import { engine } from 'express-handlebars';
import methodOverride from "method-override";
import cookieParser from "cookie-parser";
dotenv.config();

const app=express();
app.use(cookieParser())
app.use(express.static("public"))

app.listen(process.env.port);
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './temblates');
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env. connectioUrl)
// adminemodel.create({name:"yousef",email:"yousef@gamil.com",password:"1234"})
app.use("/admine",adminerouter)


