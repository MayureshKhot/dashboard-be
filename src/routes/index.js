var express = require("express");
var router = express.Router();
const authController = require("../controllers/AuthController");

/* GET home page. */
router.get("/", function(req, res) {
	res.status(200).render("index", { title: "Express" });
});

/* If you want you add health check add here... */
router.post("/api/requests/add", authController.addBanquetRequest);

module.exports = router;
