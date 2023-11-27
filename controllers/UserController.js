import path from "path";
import UserModel from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createUser = async (req, res) => {
  const { nama } = req.body;
  const file = req.files.image;

  const ext = Math.random() + path.extname(file.name);
  const filename = ext;

  const url = `${req.protocol}://${req.get("host")}/photo/${filename}`;
  file.mv(`./public/photo/${filename}`);

  try {
    const users = await UserModel.create({
      nama: nama,
      image: filename,
      url: url
    });
    res.status(201).json({ msg: "users berhasil ditambah" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
