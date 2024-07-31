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
    chats: [{ type: Schema.Types.ObjectId, ref: "Chats" }],
    grupos: [{ type: Schema.Types.ObjectId, ref: "Grupos" }],
  },
  { timestamps: true }
);

export const Usuarios = model("Usuarios", usuariosSchema);
