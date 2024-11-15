// models/flightModel.js
const db = require('../config/database');

export const findAll = async () => {
    const [rows] = await pool.query("SELECT * FROM flight");
    return rows;
};


module.exports = findAll;
