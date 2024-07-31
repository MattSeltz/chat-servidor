import { Schema, model } from "mongoose";

const mensajesSchema = new Schema(
  {
    texto: {
      type: String,
      required: true,
    },
    usuarios: [{ type: Schema.Types.ObjectId, ref: "Usuarios" }],
  },
  { timestamps: true }
);

export const Mensajes = model("Mensajes", mensajesSchema);
