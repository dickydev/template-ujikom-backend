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

export const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id])
  return rows;
};

export const deleteUser = async (id) => {
  const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id])
  return result;
};

export const updateUser = async (id, username, email, password) => {
  const [result] = await db.execute(
    'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
    [username, email, password, id]
  );
  return result;
};
