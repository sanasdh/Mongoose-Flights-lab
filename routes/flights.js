var express = require("express");
var router = express.Router();
let flightCtrl = require("../controllers/flights");

router.post("/", flightCtrl.create);
router.get("/", flightCtrl.index);
router.get("/new", flightCtrl.new);
router.get("/:id", flightCtrl.show);
// router.get("/:id/tickets/new", flightCtrl.show)

module.exports = router;
