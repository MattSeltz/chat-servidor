import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import { PORT, ORIGIN } from "./config/config.js";
import { db } from "./db/db.js";

await db();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ORIGIN,
  },
});

io.on("connection", (socket) => {
  console.log("Se ha conectado un usuario");

  socket.on("message", (msg) => io.emit("message", msg));

  socket.on("disconnect", () => console.log("Se ha desconectado un usuario"));
});

server.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}`)
);
