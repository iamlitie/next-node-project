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

module.exports = router;
