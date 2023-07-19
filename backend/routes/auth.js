import express from "express";
import { login, register } from "../controllers/auth.js";
import fileUpload from "../utils/fileUpload.js";
// const fileUpload = require("../utils/fileUpload.js"); 

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello, this is auth endpoint")
})

router.post("/register", fileUpload("./storage/images"), register)
router.post("/login", login)

export default router;