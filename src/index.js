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

server.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto ${PORT}`)
);
