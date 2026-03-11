var express = require("express");
var router = express.Router();

router.use("/", require("./homecontroller"));
// router.use("/product", require("./productcontroller"));

module.exports = router;
