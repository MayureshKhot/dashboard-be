var express = require("express");
var router = express.Router();
const BanquetController = require("../controllers/BanquetController");

router.post("/requests", BanquetController.addRequest);
router.get("/requests", BanquetController.getRequest);
router.get("/requests/:id", BanquetController.getSingleRequest);
router.put("/requests/:id", BanquetController.updateRequest);
router.delete("/requests/:id", BanquetController.deleteRequest);

module.exports = router;