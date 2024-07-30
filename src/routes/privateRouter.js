var express = require("express");
var router = express.Router();
const BanquetController = require("../controllers/BanquetController");
const adminController = require("../controllers/AdminController");
const reportController = require("../controllers/ReportController");


// Banquet Requests Routes
router.post("/requests", BanquetController.addRequest);
router.get("/requests", BanquetController.getRequests);
router.get("/requests/:id", BanquetController.getSingleRequest);
router.put("/requests/:id", BanquetController.updateRequest);
router.delete("/requests/:id", BanquetController.deleteRequest);


// Admin Routes
router.put("/updateRequestStatus/:id/:status", adminController.updateRequestStatus);

// Report Routes
router.get('/requestCounts', reportController.getRequestCounts);
router.get('/totalEarnings', reportController.getTotalEarnings);
router.get('/userCounts', reportController.getUserCounts);

module.exports = router;