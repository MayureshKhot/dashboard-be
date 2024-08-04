var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var apiResponse = require("./helpers/apiResponse");
var cors = require("cors");

//26/7/2024
var authRouter = require("./routes/auth");
var banquetRequestRouter = require("./routes/banquetRequestRoutes"); // Add this line

// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { 
	useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("DataBase connected successfully...");
		console.log("🚀App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});


var app = express();

//don't show the log when it is test
if(process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../", "frontend", "build"))); // Why this ../ because we are in src folder
app.use(cors());

// Route Prefixes
app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.use("/banquet-request", banquetRequestRouter); // Add this line

app.use(express.static(path.join(__dirname, "../", "frontend","build"))); // Why this ../ because we are in src folder

app.all("*", function (req, res) { // Deploy site 
	res.status(200).sendFile(path.join('frontend','build','index.html'), { root: './' });
});


app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return apiResponse.unauthorizedResponse(res, err.message);
  }
  next(err);
});

module.exports = app;
