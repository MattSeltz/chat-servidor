import { Schema, model } from "mongoose";

const gruposSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    usuarios: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
    mensajes: [{ type: Schema.Types.ObjectId, ref: "Mensaje" }],
  },
  { timestamps: true }
);

export const Grupos = model("Grupo", gruposSchema);
