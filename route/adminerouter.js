import   { Router } from "express";
import { adddepartment, adddoctor, adddsubject, addstudent, gotoadddepartment, gotoadddoctor, gotostudent, loginjobs, showlogin } from "../controler/admine.js";
const router =Router();

router.get("/login",showlogin)
router.post("/",loginjobs)
router.get("/gotoadddepartment",gotoadddepartment)
router.get("/gotostudent",gotostudent)
router.get("/gotoadddoctor",gotoadddoctor)
router.post("/adddepartment",adddepartment)
router.post("/adddsubject",adddsubject)
router.post("/addstudent",addstudent)
router.post("/adddoctor",adddoctor)
export default router;