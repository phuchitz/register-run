import express from "express";
import {
    createRoom,
    deleteRoom,
    getbyRoom,
    getallRooms,
    updateRoom,
    updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getbyRoom);
//GET ALL

router.get("/", getallRooms);

export default router;