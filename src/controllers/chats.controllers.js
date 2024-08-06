import { Chats } from "../models/chats.models.js";

export const getData = async (req, res) => {
  try {
    const chats = await Chats.find();
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};

export const getOneData = async (req, res) => {
  const { id } = req.params;

  try {
    const chats = await Chats.findById(id);
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};

export const postData = async (req, res) => {
  try {
    const chats = new Chats(req.body);
    await chats.save();
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};

export const putData = async (req, res) => {
  const { id } = req.params;

  try {
    const chats = await Chats.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const chats = await Chats.findByIdAndDelete(id);
    res.json(chats);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
};
