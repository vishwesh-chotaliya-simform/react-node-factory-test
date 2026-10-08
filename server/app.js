const express = require('express');

const app = express();
app.use(express.json());

const isFilled = (value) => typeof value === 'string' && value.trim() !== '';

app.post('/api/users', (req, res) => {
  const { name, email } = req.body ?? {};
  if (!isFilled(name) || !isFilled(email)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  return res.status(201).json({ name, email });
});

module.exports = app;
