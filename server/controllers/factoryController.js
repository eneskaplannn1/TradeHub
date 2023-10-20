const ApiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/errFeatures');

exports.getAll = (Model) =>
  catchAsync(async (req, res) => {
    let filter = {};
    const allowedQueryParams = ['category', 'seller', 'customer', 'product'];

    allowedQueryParams.forEach((param) => {
      if (req.query[param]) {
        filter[param] = req.query[param];
      }
    });

    console.log('filter is:', filter);

    const features = new ApiFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limit()
      .paginate();

    const document = await features.query;

    res.status(200).json({
      status: 'success',
      results: document.length,
      data: {
        document,
      },
    });
  });

exports.getOne = (Model, ...Populate) => {
  return catchAsync(async (req, res, next) => {
    // get document by id
    let query = Model.findById(req.params.id);
    console.log(...Populate);
    if (Populate) query = query.populate(Populate);
    // console.log(...Populate);
    const doc = await query;
    // console.log(doc);
    if (!doc) return next(new AppError('No document find by that id', 404));

    res.status(200).json({
      status: 'success',
      data: { doc },
    });
  });
};
exports.createOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(200).json({
      status: 'success',
      message: `${Model} created successfully`,
      data: { doc },
    });
  });
};
exports.updateOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    if (req.body.password) {
      return next(
        new AppError('You are not allowed to change password here', 404)
      );
    }
    const doc = await Model.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) return next(new AppError('No document find by that id ', 404));

    res.status(200).json({
      status: 'success',
      message: `${Model} updated successfully`,
      data: {
        doc,
      },
    });
  });
};
exports.deleteOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete({ _id: req.params.id });
    if (!doc) return next(new AppError('No document find by that id ', 404));

    res.status(200).json({
      status: 'success',
      message: `${Model} deleted successfully`,
    });
  });
};
