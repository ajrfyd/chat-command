import express from "express";
import { findOrCreate, sendMsg } from "../controllers/chat.controllers.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/findOrCreate/:id", findOrCreate);

router.post("/send", auth, sendMsg);

export default router;
