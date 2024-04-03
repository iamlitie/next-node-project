var express = require("express");
var router = express.Router();

/* 代理进来的路径 */
router.post("/getData", function (req, res) {
  const { id } = req.body;
  res.send({
    code: "200",
    status: true,
    data: {
      id,
      name: "张三",
      age: 25,
    },
  });
});

router.post("/counter", function (req, res) {
  const { amount } = req.body;
  res.send({
    code: "200",
    status: true,
    data: amount,
  });
});

module.exports = router;
