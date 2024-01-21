const OrderModel = require("../models/orderModel");
const { tokenErrorHandler, isTokens } = require("../utils/auth");
const {
  createdResponse,
  unauthorizedResponse,
  successResponse,
} = require("../utils/response");

class OrderController {
  async order(req, res) {
    const { total_quantity, total_price, first_book_title } = req.body;

    try {
      const isToken = await isTokens(req);

      if (isToken) {
        if (typeof isToken === "string") {
          res.cookie("accessToken", isToken);
        }
        const deliveryId = await OrderModel.insertDelivery(req.delivery);

        const values = [
          total_quantity,
          total_price,
          first_book_title,
          authorization.id,
          deliveryId,
        ];
        const orderId = await OrderModel.insertOrders(values);
        const orderItems = await OrderModel.getCartItems(req.body.items);
        const results = await OrderModel.insertOrderedBook(orderItems, orderId);
        const result = await OrderModel.deleteCartItems(req.body.items);

        return createdResponse(res, results[0]);
      } else {
        console.log("걍 지나간거임?");
        unauthorizedResponse(res, new Error("권한이 없습니다."));
      }
    } catch (err) {
      tokenErrorHandler(res, err);
    }
  }

  async get(req, res) {
    try {
      const isToken = await isTokens(req);

      if (isToken) {
        if (typeof isToken === "string") {
          res.cookie("accessToken", isToken);
        }
        const result = await OrderModel.get(req, res, authorization.id);
        return res.status(StatusCodes.OK).json(result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return tokenErrorHandler(res, err);
    }
  }

  async detail(req, res) {
    try {
      const isToken = await isTokens(req);
      if (isToken) {
        if (typeof isToken === "string") {
          res.cookie("accessToken", isToken);
        }
        const result = await OrderModel.detail(req.params.id);
        return successResponse(res, result);
      } else return unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return tokenErrorHandler(res, err);
    }
  }
}

module.exports = new OrderController();
