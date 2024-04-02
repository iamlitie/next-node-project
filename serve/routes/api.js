var express = require("express");
var router = express.Router();

/* 代理进来的路径 */
router.post("/getData", function (req, res) {
  console.log(req.body, '===body===')
  res.send({
    code: "200",
    status: "true",
    data: {
      name: "litie",
      age: 20,
    },
  });
});

module.exports = router;
