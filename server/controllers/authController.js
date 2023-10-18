const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/errFeatures');
const Email = require('../utils/email');

const User = require('../models/UserModel');

const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Mailgun = require('mailgun-js');

exports.sendEmail = async (req, res, next) => {
  const newUser = {
    _id: '651c13579e355fab64a43145',
    name: 'Ava Miller',
    email: 'ava_miller@gmail.com',
    role: 'seller',
    verified: true,
    password: 'pass1234',
  };
  const mailgun = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    port: 587,
  });

  mailgun.messages().send(
    {
      from: 'k88817029@gmail.com',
      to: 'k88817028@gmail.com',
      subject: 'Hello from Mailgu',
      html: '<h1>Deneme<h1/>',
    },
    (error, body) => {
      console.log(2);
      if (error) {
        console.log(error);
        console.log(error.message);
        res.status(404).send({
          message: 'something went wrong',
        });
      } else {
        res.send({
          message: 'Email send successfully',
        });
      }
    }
  );
  // try {
  //   const url = `${req.protocol}://${req.get('host')}/deneme`;
  //   await new Email(newUser, url).verifyAccount();
  //   res.status(200).json({
  //     status: 'success',
  //     newUser,
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // create special token and add it to newUser object
  const token = crypto.randomBytes(32).toString('hex');
  const specialToken = crypto.createHash('sha256').update(token).digest('hex');

  newUser.specialToken = specialToken;
  await newUser.save({ validateBeforeSave: false });

  // send non-special token to users email
  try {
    const url = `${req.protocol}://${req.get('host')}/verify-account/${token}`;
    // await new Email(newUser, url).verifyAccount();
    res.status(200).json({
      status: 'success',
      newUser,
    });
  } catch (err) {
    console.log(err);
  }
  createSendToken(newUser, 201, res);
});

exports.verifyAccount = catchAsync(async (req, res, next) => {
  // get non-special token and user check whether tokens are match
  const { token } = req.params;
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  // if they match set verified to true and set cookies
  const user = await User.findOne({ specialToken: hashedToken });
  if (!user) {
    return next(new AppError('Email Validation failed', 400));
  }
  user.verified = true;
  await user.save({ validateBeforeSave: false });
  next();
});

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_IN * 1000),
    httpOnly: false,
    withCredentials: true,
    SameSite: 'None',
  };

  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  user.password = undefined;
  res.cookie('jwt', token, cookieOptions);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user },
  });
};

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError('please provide email and password', 404));

  // checking if user exists and verifying password
  let isCorrectPassword;

  const user = await User.findOne({ email }).select('+password');
  if (user) {
    isCorrectPassword = await user.correctPassword(password, user.password);
  }

  if (!user || !isCorrectPassword) {
    // If the user or password is incorrect, return an error
    return next(new AppError('incorrect email or password', 401));
  }

  // as the name says

  createSendToken(user, 200, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'logout', { expires: new Date(Date.now() + 1000) });
  res.status(200).json({
    status: 'success',
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  // Check if the request header contains the "Authorization" header with a Bearer token
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // If the token is not found in the request header, check if it is present in the cookies
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // If no token is found, throw an error indicating that the user is not logged in
  if (!token) {
    next(
      new AppError('You are not logged in! Please log in to get access', 401)
    );
  }

  // Verify the token using the JWT_SECRET and decode its payload
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  // Find the user in the database based on the decoded user id
  const user = await User.findOne({ _id: decoded.id });

  // If no user is found with the decoded id, throw an error indicating that the user does not exist
  if (!user) {
    return next(
      new AppError('The user belonging to this token does not exist', 401)
    );
  }

  // Check if the user has changed their password after the token was issued

  const userChangedPasswordAfter = await user.changedPasswordAfter(decoded.iat);

  if (userChangedPasswordAfter) {
    return next(
      new AppError('User changed their password. Please log in again')
    );
  }

  // Set the user object in the request and response locals for future use
  req.user = user;
  res.locals.user = user;

  // Call the next middleware
  return next();
});

exports.logUserIn = catchAsync(async (req, res, next) => {
  let token;
  // Check if the request header contains the "Authorization" header with a Bearer token
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // If the token is not found in the request header, check if it is present in the cookies
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // If no token is found, throw an error indicating that the user is not logged in
  if (!token) {
    next(
      new AppError('You are not logged in! Please log in to get access', 401)
    );
  }
  // Verify the token using the JWT_SECRET and decode its payload
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  // Find the user in the database based on the decoded user id
  const user = await User.findOne({ _id: decoded.id });

  // If no user is found with the decoded id, throw an error indicating that the user does not exist
  if (!user) {
    return next(
      new AppError('The user belonging to this token does not exist', 401)
    );
  }

  // Check if the user has changed their password after the token was issued
  const userChangedPasswordAfter = await user.changedPasswordAfter(decoded.iat);
  if (userChangedPasswordAfter) {
    return next(
      new AppError('User changed their password. Please log in again', 404)
    );
  }
  res.status(200).json(user);
});

// only for rendered pages
exports.isLoggenIn = catchAsync(async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);

      // 2) Check if user still exists
      const user = await User.findOne({ _id: decoded.id });

      if (!user)
        return next(
          new AppError('The user belonging to this token does not exist', 401)
        );
      // 3) Check if user changed password after the token was issued
      if (user.changedPasswordAfter(decoded.iat))
        return next(
          new AppError('User changed his password , please log in again')
        );

      // THERE IS A LOGGED IN USER
      req.user = user;
      res.locals.user = user;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // Check if the user's role is included in the allowed roles
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }

    // Call the next middleware
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // get user based on email
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new AppError('Wrong Email address', 404));
  // generated random reset token

  const resetToken = user.createPasswordResetToken();
  await user?.save();

  // send reset token to users email

  try {
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/auth/resetPassword/${resetToken}`;

    await new Email(user, resetUrl);

    res.status(200).json({
      status: 'success',
      message: 'token sent to email ',
    });
  } catch (err) {
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    user.save();
    return next(new AppError('there was an error sending the email', 500));
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //! 1) Get user based on the token

  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) return next(new AppError('Reset token is invalid or expired!'));

  //!  2) If token has not expired and there is user ,set the new passord

  user.password = req.body.password;
  user.passwordResetExpires = null;
  user.passwordResetToken = null;

  //!   3) update changedpasswordAt property for the user and save the new values
  await user.save();
  //!   4) log user in send jwt
  createSendToken(user, 202, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');
  console.log(user);
  if (!user) next(new AppError('No user found with corresponding id', 404));

  // console.log(user);
  const isPasswordCorrect = await user.correctPassword(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect)
    return next(new AppError('Your password is incorrect', 401));

  user.password = req.body.newPassword;
  await user.save();
  console.log(user);
  // ! log user in send jwt
  createSendToken(user, 200, res);
});
