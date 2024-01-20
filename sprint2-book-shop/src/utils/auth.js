const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const ensureAuthorization = (req) => {
  try {
    const receivedJWT = req.headers["authorization"];
    // console.log(receivedJWT);
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
    throw err;
  }
};

const tokenSign = (id, email) => {
  return jwt.sign(
    {
      id: id,
      email: email,
    },
    process.env.PRIVATE_KEY,
    { expiresIn: "6h", issuer: "lcw" }
  );
};

const tokenRefresh = () => {
  return jwt.sign({}, secret, {
    // refresh token은 payload 없이 발급
    algorithm: "HS256",
    expiresIn: "14d",
  });
};

const tokenRefreshVerify = async (token, userId) => {
  // refresh token 검증
  /* redis 모듈은 기본적으로 promise를 반환하지 않으므로,
     promisify를 이용하여 promise를 반환하게 해줍니다.*/
  const getAsync = promisify(redisClient.get).bind(redisClient);

  try {
    const data = await getAsync(userId); // refresh token 가져오기
    if (token === data) {
      try {
        jwt.verify(token, secret);
        return true;
      } catch (err) {
        throw err;
      }
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  ensureAuthorization,
  tokenSign,
  tokenRefresh,
  tokenRefreshVerify,
};
