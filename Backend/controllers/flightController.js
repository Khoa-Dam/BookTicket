const db = require("../config/database");

const getAllFlights = async (req, res) => {
    const [rows] = await db.query("SELECT * FROM flight");
    return res.status(200).json({
        errorCode: 0,
        data: rows
    })
}


module.exports = { getAllFlights };
