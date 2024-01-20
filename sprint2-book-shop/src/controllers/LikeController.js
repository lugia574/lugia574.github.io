const LikeModel = require("../models/likeModel");
const { ensureAuthorization } = require("../utils/auth");
const { successResponse, unauthorizedResponse } = require("../utils/response");

class LikeController {
  async add(req, res) {
    const bookId = req.params.id;

    try {
      const authorization = ensureAuthorization(req, res);
      if (authorization) {
        const result = await LikeModel.add(req, res, bookId);
        successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return errorHandler(res, err);
    }
  }

  async remove(req, res) {
    const bookId = req.params.id;

    try {
      const authorization = ensureAuthorization(req, res);
      if (authorization) {
        const result = await LikeModel.remove(req, res, bookId);
        return successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return errorHandler(res, err);
    }
  }
}

module.exports = new LikeController();
