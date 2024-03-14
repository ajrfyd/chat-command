import express from "express";
import { getRooms, getRoom } from "../controllers/room.controllers.js";
import { auth } from "../middlewares/auth.js";
import { searchRoom } from "../middlewares/room.js";

const router = express.Router();

router.get("/", auth, getRooms);

router.get("/:roomType", auth, searchRoom, getRoom);

export default router;
