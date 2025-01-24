import express from "express";
import { createUser, getAllUsers, getUserById, deleteUser, updateUser } from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/users",authenticateToken, createUser);
router.get("/users",authenticateToken, getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser)

export default router;