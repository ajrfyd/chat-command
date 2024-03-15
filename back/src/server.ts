import path from "path";
import express from "express";
import "./utils/env.js";
import cors from "cors";
import morgan from "morgan";
import cookieparser from "cookie-parser";
import {
  errorHandler,
  responseStateMaker,
  lookup,
} from "./middlewares/common.js";
import roomRoutes from "./routes/room.routes.js";
import authRoutes from "./routes/auth.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { app, server } from "./socket/socket.js";
import db from "./db/models/index.js";

const { PORT, COOKIE_SECRET } = process.env;

db.sequelize.sync().catch(console.log);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser(COOKIE_SECRET));
// app.use(cookieparser());
app.use(
  cors({
    methods: ["GET", "POST", "OPTIONS"],
    origin: [
      "https://k-log3943.netlify.app",
      "https://klog.hkound.pe.kr",
      "http://localhost:5174",
      "http://localhost:5555",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.static(path.join(path.resolve(), "/dist")));
app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"));

app.use(lookup, responseStateMaker);
app.use("/api/auth", authRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
  const { completeRes } = req;
  res.status(200).sendFile("/index.html");
  // completeRes("Good!");
});

app.get("*", (req, res) => {
  res.send(
    "<div style='text-align: center; margin-top: 7rem; font-size: 3rem; color: red;'><h1>404 Not Found</h1></div>"
  );
});

server.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
