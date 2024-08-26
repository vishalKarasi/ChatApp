import { Router } from "express";
import { signup, login, logout } from "../controllers/authController.js";
// import { parserImg } from "../middlewares/multer.js";

const router = Router();

router.post("/signup", signup); //parserImg.single("profilePic")
router.post("/login", login); //parserImg.none()
router.post("/logout", logout);

export default router;
