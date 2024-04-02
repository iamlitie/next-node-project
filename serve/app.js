var express = require("express");
var boduParser = require("body-parser");
var cors = require("cors");

var port = "9000";
var app = express();
var api = require("./routes/api");

app.use(boduParser.json()); // 解析请求体
app.use(express.static("public")); // 设置静态资源访问目录
app.use(cors()); // 允许跨域

app.get("/", function (req, res) {
  res.send("hello node");
});

app.use("/api", api);

// 开启端口监听
app.listen(port, function () {
  console.log("server running at \x1B[31m http://localhost:9000 \x1B[0m");
});
