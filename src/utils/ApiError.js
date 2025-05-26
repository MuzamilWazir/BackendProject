class ApiError extends Error {
  constructor(
    statusCode,
    messasge = "Something Went Wrong",
    errors = [],
    stack = ""
  ) {
    super(messasge);
    this.statusCode = statusCode,
    this.data = null,
    this.message = messasge,
    this.success = false,
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.contructor);
    }
  }
}

export { ApiError };
