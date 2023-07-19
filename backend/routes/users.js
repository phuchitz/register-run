import express from "express";
import { createUser, updateUser, deleteUser, getbyUser, getallUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/",verifyUser, createUser);
//UPDATE
router.put("/:id",verifyUser, updateUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getbyUser);
//GET ALL
router.get("/",verifyAdmin, getallUser);


export default router;