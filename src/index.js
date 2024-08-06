import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";

import { PORT, ORIGIN } from "./config/config.js";
import { db } from "./db/db.js";
import { connection } from "./chat/chat.js";
import authRoutes from "./routes/auth.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import chatsRoutes from "./routes/chats.routes.js";

await db();

const app = express();

app.use(express.json());
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(cookieParser());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ORIGIN,
    credentials: true,
  },
});

connection(io);

app.use("/auth", authRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/chats", chatsRoutes);

server.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}`)
);
