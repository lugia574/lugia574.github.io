const OrderModel = require("../models/orderModel");
const {
  createdResponse,
  badRequestResponse,
  unauthorizedResponse,
  successResponse,
} = require("../utils/response");

class OrderController {
  async order(req, res) {
    try {
      const authorization = await ensureAuthorization(req, res);
      if (authorization) {
        const delivery_id = await OrderModel.insertDelivery(req, res);
        const order_id = await OrderModel.insertOrders(
          req,
          res,
          delivery_id,
          authorization
        );
        const orderItems = await OrderModel.selectCartItems(req, res);
        const results = await OrderModel.insertOrderedBook(
          req,
          res,
          orderItems,
          order_id
        );
        const result = await OrderModel.deleteCartItems(req, res);

        return createdResponse(res, results[0]);
      } else unauthorizedResponse(res, "권한이 없습니다.");
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }

  async get(req, res) {
    try {
      const result = await OrderModel.get(req, res);
      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }

  async Detail(req, res) {
    const orderId = req.params.id;

    try {
      const result = await OrderModel.Detail(req, res, orderId);

      return successResponse(res, result);
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }
}

module.exports = new OrderController();
