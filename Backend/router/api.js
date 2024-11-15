const express = require("express");
const { getAllFlights } = require("../controllers/flightController");
const app = require("../middlewares/app");
const router = express.Router();

// Route lấy danh sách chuyến bay
app.use("/api/flights", getAllFlights);


module.exports = router;
