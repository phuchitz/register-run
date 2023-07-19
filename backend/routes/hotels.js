import express from "express";
import {
  createHotel,
  deleteHotel,
  getallHotel,
  getbyHotel,
  updateHotel,
  countByCity
} from "../controllers/hotel.js";
// import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getbyHotel);
//GET ALL
router.get("/", getallHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", getallHotel);

export default router;
