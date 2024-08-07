import { Usuarios } from "../models/usuarios.models.js";

export const getData = async (req, res) => {
  try {
    const usuarios = await Usuarios.find().populate({
      path: "chats",
      populate: "usuarios",
    });
    res.json(usuarios);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};

export const getOneData = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarios = await Usuarios.findById(id).populate({
      path: "chats",
      populate: "usuarios",
    });
    res.json(usuarios);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};

export const putData = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarios = await Usuarios.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(usuarios);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarios = await Usuarios.findByIdAndDelete(id);
    res.json(usuarios);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};
