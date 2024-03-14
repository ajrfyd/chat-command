import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  getRoomsForAdmin,
  getMsgsForAdmin,
} from "../controllers/admin.controllers.js";

const adminRoutes = express.Router();

adminRoutes.get("/rooms/:roomType", auth, getRoomsForAdmin);
adminRoutes.get("/room/:id", auth, getMsgsForAdmin);
export default adminRoutes;
