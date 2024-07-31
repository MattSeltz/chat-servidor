import { Schema, model } from "mongoose";

const gruposSchema = new Schema(
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

export const Grupos = model("Grupos", gruposSchema);
