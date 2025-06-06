import { Router } from "express";
import { loginUser, logoutUser, refreshAccesToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/middleware.multer.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser)

router.route("/refresh-token").get(refreshAccesToken)


export default router;
