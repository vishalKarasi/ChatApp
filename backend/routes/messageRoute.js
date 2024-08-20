import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.get("/:id", verifyToken, getMessages);
router.post("/send/:id", verifyToken, sendMessage);

export default router;
