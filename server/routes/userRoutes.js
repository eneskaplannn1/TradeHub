const { Router } = require("express");

const authController = require("../controllers/authController");
const userRouter = Router();

userRouter.get("/logUserIn", authController.logUserIn);
// Todo signup
userRouter.post("/signup", authController.signup);
// Todo verifyAccount

// for teacher login post /login?userType=teacher
// for user login post /login

userRouter.post("/login", authController.login);
userRouter.get("/logout", authController.logout);
userRouter.post("/forgotPassword", authController.forgotPassword);
userRouter.post("/resetPassword/:resetToken", authController.resetPassword);

userRouter.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);

module.exports = userRouter;
