import { Schema, model } from "mongoose";

const chatsSchema = new Schema(
  {
    usuarios: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
    mensajes: [{ type: Schema.Types.ObjectId, ref: "Mensaje" }],
  },
  { timestamps: true }
);

export const Chats = model("Chat", chatsSchema);
