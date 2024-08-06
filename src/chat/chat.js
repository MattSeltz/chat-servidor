import { Usuarios } from "../models/usuarios.models.js";

export const connection = (io) => {
  io.on("connection", async (socket) => {
    console.log("Se ha conectado un usuario");

    const id = socket.handshake.auth.token;

    const usuarios = await Usuarios.findById(id);

    socket.on("message", (msg) => {
      io.emit("message", { msg, id: usuarios });
    });

    socket.on("disconnect", () => console.log("Se ha desconectado un usuario"));
  });
};
