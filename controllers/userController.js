import * as UserModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await UserModel.createdUser(username, email, password);
    res.status(201).json({ msg: "User Created", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
