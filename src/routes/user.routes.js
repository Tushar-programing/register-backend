import {Router} from "express";
import { registerUser, updateAvatar, updatePurpose } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerUser);
// router.route("/edit-video/:videoId").get(verifyJWT, upload.single("thumbnail"), updateVideo)
router.route("/avatar/:user").get(upload.single("thumbnail"), updateAvatar)

router.route("/purpose/:user").get(updatePurpose)

export default router;