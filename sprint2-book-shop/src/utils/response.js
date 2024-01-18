const { StatusCodes } = require("http-status-codes");

const successResponse = (res, data) => {
  return res.status(StatusCodes.OK).json(data);
};

const createdResponse = (res, data) => {
  return res.status(StatusCodes.CREATED).json(data);
};

const badRequestResponse = (res, message) => {
  console.log(message);
  return res.status(StatusCodes.BAD_REQUEST).json(message.name);
};

const notFoundResponse = (res, message) => {
  return res.status(StatusCodes.NOT_FOUND).json(message);
};

const unauthorizedResponse = (res, message) => {
  return res.status(StatusCodes.UNAUTHORIZED).end(message);
};

module.exports = {
  successResponse,
  createdResponse,
  badRequestResponse,
  notFoundResponse,
  unauthorizedResponse,
};
