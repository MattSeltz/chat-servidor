import { Usuarios } from "../models/usuarios.models.js";

export const connection = (io) => {
  io.on("connection", async (socket) => {
    console.log("Se ha conectado un usuario");

    const id = socket.handshake.auth.user;
    const chat = socket.handshake.auth.chat;

    socket.join(chat);

    const usuarios = await Usuarios.findById(id).populate("chats");

    socket.on("message", (msg) => {
      io.to(chat).emit("message", { msg, id: usuarios });
    });

    socket.on("disconnect", () => console.log("Se ha desconectado un usuario"));
  });
};
