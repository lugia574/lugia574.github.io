const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

// dotenv 모듈
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

const userRouter = require("./routes/users.js");
const cartsRouter = require("./routes/carts.js");
const likesRouter = require("./routes/likes.js");
const ordersRouter = require("./routes/orders.js");
const booksRouter = require("./routes/books.js");
const categoryRouter = require("./routes/category.js");

app.use(cookieParser());
// app.set("view engine", "pug");
// app.set("views", process.cwd() + "/lugia574.github.io/sprint2-book-shop/views");

app.use("/users", userRouter);
app.use("/carts", cartsRouter);
app.use("/likes", likesRouter);
app.use("/orders", ordersRouter);
app.use("/books", booksRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.listen(port, () => {
  console.log(`실행됨 포트번호 : ${port}`);
});
