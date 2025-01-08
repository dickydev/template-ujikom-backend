import db from "../config/db.js";

export const createdUser = async (username, email, password) => {
  const [result] = await db.execute(
    "INSERT INTO users (username, email, password) VALUES (?,?,?)",
    [username, email, password]
  );
  return result;
};

export const getAllUsers = async () => {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows;
};

export const getUserById = async (id) => {};
export const deleteUser = async (id) => {};
export const updateUser = async (id) => {};
