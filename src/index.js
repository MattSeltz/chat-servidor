import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";

import { PORT, ORIGIN } from "./config/config.js";
import { db } from "./db/db.js";
import { connection } from "./chat/chat.js";
import authRoutes from "./routes/auth.routes.js";

await db();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ORIGIN,
  },
});

connection(io);

app.use("/auth", authRoutes);

server.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}`)
);
