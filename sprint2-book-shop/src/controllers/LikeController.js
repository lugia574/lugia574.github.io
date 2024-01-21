const LikeModel = require("../models/likeModel");
const { tokenErrorHandler, isTokens } = require("../utils/auth");
const { successResponse, unauthorizedResponse } = require("../utils/response");

class LikeController {
  async add(req, res) {
    const bookId = req.params.id;

    try {
      const isToken = await isTokens(req);
      if (isToken) {
        if (typeof isToken === "string") {
          res.cookie("accessToken", isToken);
        }
        const result = await LikeModel.add(req, res, bookId);
        successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return tokenErrorHandler(res, err);
    }
  }

  async remove(req, res) {
    const bookId = req.params.id;

    try {
      const isToken = await isTokens(req);
      if (isToken) {
        if (typeof isToken === "string") {
          res.cookie("accessToken", isToken);
        }
        const result = await LikeModel.remove(req, res, bookId);
        return successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return tokenErrorHandler(res, err);
    }
  }
}

module.exports = new LikeController();
