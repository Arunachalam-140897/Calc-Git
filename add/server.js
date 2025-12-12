const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Inputs must be numbers' });
  }
  const result = num1 + num2;
  res.json({ result });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Addition service running on port ${PORT}`));
