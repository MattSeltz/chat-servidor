export const connection = (io) => {
  io.on("connection", (socket) => {
    console.log("Se ha conectado un usuario");

    socket.on("disconnect", () => console.log("Se ha desconectado un usuario"));
  });
};
