const {
  unauthorizedResponse,
  badRequestResponse,
  serverErrorResponse,
} = require("./response");

const errorHandler = (res, err) => {
  if (err instanceof jwt.TokenExpiredError)
    // 리프레시 토큰을 봐서 그걸 갱신해주는 코드 ㄱㄱ
    return unauthorizedResponse(
      res,
      "로그인이 만료되었습니다. 다시 로그인하세요"
    );
  else if (err instanceof jwt.JsonWebTokenError)
    return badRequestResponse(res, "잘못된 토큰입니다.");
  else if (err instanceof ReferenceError) return badRequestResponse(res, err);
  else return serverErrorResponse(res, "서버오류");
};

module.exports = errorHandler;
