import express, { Router } from "express";
import { getUser, createUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/getuser", getUser);
router.post("/createuser", createUser);

export default router;
