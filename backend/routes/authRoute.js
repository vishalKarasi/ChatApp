import { Router } from "express";
import { signup, login, logout } from "../controllers/authController.js";
import { parserImg } from "../middlewares/multer.js";

const router = Router();

router.post("/signup", parserImg.single("profilePic"), signup);
router.post("/login", parserImg.none(), login);
router.post("/logout", logout);

export default router;
