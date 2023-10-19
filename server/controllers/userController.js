const factory = require('../controllers/factoryController');
const User = require('../models/UserModel');

exports.getAllUsers = factory.getAll(User);

exports.getUser = factory.getOne(
  User,
  {
    path: 'favorites',
    select: '_id brand prodDesc price createdAt category cargoCharge',
  },
  {
    path: 'reviews',
  }
);

exports.createUser = factory.createOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
