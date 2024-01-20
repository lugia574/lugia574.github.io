const CartsModel = require("../models/CartsModel");
const { ensureAuthorization } = require("../utils/auth");

const {
  createdResponse,
  badRequestResponse,
  successResponse,
} = require("../utils/response");

// 장바구니 추가
class CartsController {
  async add(req, res) {
    const { book_id, quantity } = req.body;

    try {
      const authorization = ensureAuthorization(req, res);
      if (authorization) {
        const result = await CartsModel.add(req, res, book_id, quantity);
        return createdResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return errorHandler(res, err);
    }
  }

  // 장바구니 도서 조회
  async get(req, res) {
    const { selected } = req.body;

    try {
      const authorization = ensureAuthorization(req, res);
      if (authorization) {
        const result = await CartsModel.get(
          req,
          res,
          selected,
          authorization.id
        );
        return successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return errorHandler(res, err);
    }
  }

  // 장바구니 도서 삭제
  async remove(req, res) {
    const cartItemId = req.params.id;

    try {
      const authorization = ensureAuthorization(req);
      if (authorization) {
        const result = await CartsModel.remove(req, res, cartItemId);
        return successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return errorHandler(res, err);
    }
  }
}

module.exports = new CartsController();
