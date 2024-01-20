const UserModel = require("../models/userModel");
const { tokenSign, tokenRefresh } = require("../utils/auth");
const errorHandler = require("../utils/errors");
const {
  successResponse,
  unauthorizedResponse,
  badRequestResponse,
  notFoundResponse,
  createdResponse,
} = require("../utils/response");

class UserController {
  async join(req, res) {
    const { email, password } = req.body;
    // console.log("가긴 가냐?");

    try {
      const result = await UserModel.create(email, password);
      if (result.affectedRows > 0) createdResponse(res, result);
      else return notFoundResponse(res, "계정 생성 실패");
    } catch (err) {
      return errorHandler(res, err);
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const loginUser = await UserModel.login(email, password);
      if (loginUser) {
        const token = tokenSign(loginUser.id, loginUser.email);
        const refreshToken = tokenRefresh();
        // 쿠키에 담기
        res.cookie("token", token, { httpOnly: true });
        res.cookie("refreshToken", refreshToken, { httpOnly: true });
        return successResponse(res, "로그인");
      } else return unauthorizedResponse(res, "입력 정보가 맞지 않습니다.");
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }

  async passwordResetRequest(req, res) {
    const { email } = req.body;

    try {
      const user = await UserModel.passwordResetRequest(email);
      console.log(user);
      if (user) {
        return successResponse(res, user);
      } else return unauthorizedResponse(res, "입력 정보가 맞지 않습니다.");
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }

  async passwordReset(req, res) {
    const { email, password } = req.body;

    try {
      const affectedRows = await UserModel.passwordReset(email, password);

      if (affectedRows) return successResponse(res, "변경완료");
      else return badRequestResponse(res, "변경 실패");
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }
}

module.exports = new UserController();
