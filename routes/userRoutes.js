import express from "express";
import { createUser, getAllUsers, getUserById, deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser)

export default router;
