const processInput = require('../utils/processInput');

require('dotenv').config();
const USER_ID = `${process.env.USER_FULL_NAME }_${process.env.USER_DOB }`.toLowerCase();
const EMAIL = process.env.EMAIL;
const ROLL_NUMBER = process.env.ROLL_NUMBER;

exports.handleBfhlPost = (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "'data' must be an array" });
    }

    const result = processInput(data);
    res.status(200).json({
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      ...result,
    });
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
};
