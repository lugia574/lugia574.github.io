const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { unauthorizedResponse, badRequestResponse } = require("./response");
dotenv.config();

const ensureAuthorization = (req, res, next) => {
  try {
    const receivedJWT = req.headers["authorization"];
    console.log(receivedJWT);
    if (receivedJWT) {
      const decodedJWT = jwt.verify(receivedJWT, process.env.PRIVATE_KEY);
      req.authorization = decodedJWT; // 요청 객체에 검증된 토큰 추가
      return decodedJWT;
    } else {
      return false;
      // new ReferenceError("jwt must be provided");
    }
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err);

    if (authorization instanceof jwt.TokenExpiredError)
      return unauthorizedResponse(
        res,
        "로그인 세션이 만료되었습니다. 다시 로그인하세요"
      );
    else if (authorization instanceof jwt.JsonWebTokenError)
      return badRequestResponse(res, "잘못된 토큰입니다.");
    else if (authorization instanceof ReferenceError) {
      // 로그인 안되어 있음
      return false;
    } else {
      // 기타 오류 처리
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "서버 오류",
      });
    }
  }
};

module.exports = ensureAuthorization;
