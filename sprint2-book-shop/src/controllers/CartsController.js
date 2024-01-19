const CartsModel = require("../models/CartsModel");

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
      const result = await CartsModel.add(req, res, book_id, quantity);
      return createdResponse(res, result);
    } catch (err) {
      return badRequestResponse(err);
    }
  }

  // 장바구니 도서 조회
  async get(req, res) {
    const { selected } = req.body;

    try {
      const result = await CartsModel.get(req, res, selected);
      return successResponse(res, result);
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }

  // 장바구니 도서 삭제
  async remove(req, res) {
    const cartItemId = req.params.id;

    try {
      const result = await CartsModel.remove(req, res, cartItemId);
      return successResponse(res, result);
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }
}

module.exports = new CartsController();
