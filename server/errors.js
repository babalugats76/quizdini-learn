const { INTERNAL_SERVER_ERROR } = require("http-status-codes");

class CustomError extends Error {
  constructor(msg, statusCode = INTERNAL_SERVER_ERROR, code = undefined) {
    super(msg);
    this.statusCode = statusCode;
    this.code = code || this.constructor.name;
  }
  getError() {
    return {
      statusCode: this.statusCode,
      code: this.code,
      message: this.message
    };
  }
}

module.exports = {
  CustomError
};
