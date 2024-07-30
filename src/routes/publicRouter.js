var express = require("express");
var router = express.Router();
const BanquetController = require("../controllers/BanquetController");

// requests Routes
router.post("/requests", BanquetController.addRequest);
router.get("/requests/:id", BanquetController.getSingleRequest);
router.put("/requests/:id", BanquetController.updateRequest);

module.exports = router;