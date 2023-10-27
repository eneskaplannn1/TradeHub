class AppError extends Error {
  constructor(message, statusCode, type) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'success';
    this.isOperational = true;
  }
}

module.exports = AppError;
