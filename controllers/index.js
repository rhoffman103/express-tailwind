const router = require("express").Router();
const htmlRouter = require("./htmlRouter");

router.use(htmlRouter);

module.exports = router;