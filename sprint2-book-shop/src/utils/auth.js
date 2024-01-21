const {
  unauthorizedResponse,
  badRequestResponse,
  serverErrorResponse,
} = require("./response");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const signAccessToken = (id, email) => {
  return jwt.sign(
    {
      id: id,
      email: email,
    },
    process.env.PRIVATE_KEY,
    { expiresIn: "2h", issuer: "lcw" }
  );
};

const signRefreshToken = () => {
  return jwt.sign(
    {
      id: id,
      email: email,
    },
    process.env.PRIVATE_KEY,
    {
      expiresIn: "14d",
      issuer: "lcw",
    }
  );
};
const isTokens = (req, res) => {
  // 아예 로그인 안한경우
  if (req.cookies.access === undefined) return false;
  try {
    const accessToken = verifyToken(req.cookies.access);
    const refreshToken = verifyToken(req.cookies.refresh);

    if (accessToken === null) {
      if (refreshToken === undefined) {
        // case1: access 만료, refresh 만료
        return false;
      } else {
        const newAccessToken = signAccessToken(
          refreshToken.id,
          refreshToken.email
        );
        res.cookie("access", newAccessToken);
        req.cookies.access = newAccessToken;
        return true;
      }
    } else {
      if (refreshToken === undefined) {
        // case3: access 유효, refresh 만료
        const newRefreshToken = signRefreshToken();
        res.cookie("refresh", newRefreshToken);
        req.cookies.refresh = newRefreshToken;
        return true;
      }
    }
    return true;
  } catch (err) {
    throw err;
  }
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.PRIVATE_KEY);
};

const tokenErrorHandler = (res, err) => {
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

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyToken,
  tokenErrorHandler,
  isTokens,
};
