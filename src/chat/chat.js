export const connection = (io) => {
  io.on("connection", (socket) => {
    console.log("Se ha conectado un usuario");

    socket.on("message", (msg, id) => {
      io.emit("message", { msg, id: socket.id });
    });

    socket.on("disconnect", () => console.log("Se ha desconectado un usuario"));
  });
};
