require('dotenv').config();
const express = require('express');
const bfhlRoutes = require('./routes/bfhl.routes');


const app = express();
app.use(express.json());

app.use('/bfhl', bfhlRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ is_success: false, error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
