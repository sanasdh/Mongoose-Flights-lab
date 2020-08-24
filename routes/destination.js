var express = require('express');
var router = express.Router();
let destinationCtrl = require("../controllers/destination")

/* GET home page. */
router.post("/flights/:id/destination", destinationCtrl.create)
// router.post("/:id/show", flightCtrl.newDestination)

module.exports = router;
