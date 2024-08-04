import { Schema, model } from "mongoose";

const mensajesSchema = new Schema(
  {
    texto: {
      type: String,
      required: true,
    },
    usuarios: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
  },
  { timestamps: true }
);

export const Mensajes = model("Mensaje", mensajesSchema);
