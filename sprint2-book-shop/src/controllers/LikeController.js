const LikeModel = require("../models/likeModel");
const {
  successResponse,
  unauthorizedResponse,
  badRequestResponse,
} = require("../utils/response");

class LikeController {
  async add(req, res) {
    const bookId = req.params.id;
    console.log(bookId);
    try {
      const result = await LikeModel.add(req, res, bookId);
      if (result) {
        return successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }

  async remove(req, res) {
    const bookId = req.params.id;

    try {
      const result = await LikeModel.remove(req, res, bookId);
      if (result) {
        return successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }
}

module.exports = new LikeController();
