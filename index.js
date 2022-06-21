import HtmlImg from "./lib/HtmlIng.js";
// import express from("express");
import Express from "express";
const app = Express();
/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/HelloWorld", (req, res) => {
  HtmlImg.HtmlImg("HelloWorld", { user: "admin" }).then((data) => {
    res?.send(`<img src="data:image/jpeg;base64,${data}" /img>`);
  });
});
app.listen(3300, () => {
  console.log("服务器运行在3300");
});
