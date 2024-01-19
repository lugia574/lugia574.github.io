const OrderModel = require("../models/orderModel");
const { ensureAuthorization } = require("../utils/auth");
const {
  createdResponse,
  badRequestResponse,
  unauthorizedResponse,
  successResponse,
  serverErrorResponse,
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
      if (err instanceof jwt.TokenExpiredError)
        return unauthorizedResponse(
          res,
          "로그인 세션이 만료되었습니다. 다시 로그인하세요"
        );
      else if (err instanceof jwt.JsonWebTokenError)
        return badRequestResponse(res, "잘못된 토큰입니다.");
      else if (err instanceof ReferenceError) {
        return false;
      } else {
        // 기타 오류 처리
        return serverErrorResponse(res, "서버오류");
      }
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
