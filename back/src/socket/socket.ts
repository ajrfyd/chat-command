import { Server } from "socket.io";
import http from "http";
import express from "express";
import db from "../db/models/index.js";
import { Op } from "sequelize";

const { log } = console;
const sockerUser = {};

export const app = express();
export const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: [
      "https://k-log3943.netlify.app",
      "https://klog.hkound.pe.kr",
      "http://localhost:3040",
      "http://localhost:5174",
      "http://localhost:5555",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  },
});

io.use(async (socket, next) => {
  const { nickName } = socket.handshake.auth;
  if (nickName) {
    console.log(nickName);
    try {
      const res = await db.User.update(
        { latestConnectionId: socket.id, status: "A" },
        { where: { nickName, deletedAt: { [Op.eq]: null } } }
      );
    } catch (e) {
      console.log(e);
    }
  }

  next();
});

io.on("connection", (socket) => {
  log(`${socket.id} connected!`);

  socket.on("disconnect", (reason) => {
    log(`${reason} :> ${socket.id} disconnected!`);
  });
});

export default io;
