import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { Usuarios } from "../models/usuarios.models.js";
import { SECRET_KEY } from "../config/config.js";

export const register = async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).send("Faltan credenciales");
  }

  // Verifica si el usuario ya existe
  const existingUser = await Usuarios.findOne({ email });
  if (existingUser) {
    return res.status(400).send("Usuario ya registrado");
  }

  // Encripta la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Guarda el nuevo usuario
  const usuarios = new Usuarios({ nombre, email, password: hashedPassword });

  await usuarios.save();

  res.json(usuarios);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Faltan credenciales");
  }

  // Encuentra el usuario
  const user = await Usuarios.findOne({ email });
  if (!user) {
    return res.status(400).send("Usuario no encontrado");
  }

  // Compara la contraseña
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Contraseña incorrecta");
  }

  // Crea un token JWT
  const token = jwt.sign({ nombre: user.nombre }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.cookie("token", token);
  res.json(user);
};
