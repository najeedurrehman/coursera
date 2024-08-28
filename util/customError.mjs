class customError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.success = false;
    this.statusCode = statusCode;
  }
}


export default customError;