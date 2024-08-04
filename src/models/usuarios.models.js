import { Schema, model } from "mongoose";

const usuariosSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
    grupos: [{ type: Schema.Types.ObjectId, ref: "Grupo" }],
  },
  { timestamps: true }
);

export const Usuarios = model("Usuario", usuariosSchema);
