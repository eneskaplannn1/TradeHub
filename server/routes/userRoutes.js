const { Router } = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const userRouter = Router();

userRouter.get('/logUserIn', authController.logUserIn);
// Todo signup
userRouter.post('/signup', authController.signup);
// Todo verifyAccount

// for teacher login post /login?userType=teacher
// for user login post /login

userRouter.post('/login', authController.login);
userRouter.get('/logout', authController.logout);
userRouter.post('/forgotPassword', authController.forgotPassword);
userRouter.post('/resetPassword/:resetToken', authController.resetPassword);

userRouter.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

userRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
