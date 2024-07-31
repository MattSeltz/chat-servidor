import { Schema, model } from "mongoose";

const chatsSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    usuarios: [{ type: Schema.Types.ObjectId, ref: "Usuarios" }],
    mensajes: [{ type: Schema.Types.ObjectId, ref: "Mensajes" }],
  },
  { timestamps: true }
);

export const Chats = model("Chats", chatsSchema);
