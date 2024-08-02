import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import { PORT, ORIGIN } from "./config/config.js";
import { db } from "./db/db.js";
import { connection } from "./chat/chat.js";

await db();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ORIGIN,
  },
});

connection(io);

server.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}`)
);
