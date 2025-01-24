import * as authController from "../controllers/authController.js"
import express from 'express'

const router = express.Router();

router.post('/login', authController.Login);
router.post('/register', authController.Register);

export default router