const express = require('express');

const app = express();
app.use(express.json());

const isFilled = (value) => typeof value === 'string' && value.trim() !== '';
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/users', (req, res) => {
  const { name, email } = req.body ?? {};
  if (!isFilled(name) || !isFilled(email) || !isEmail(email)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  return res.status(201).json({ name, email });
});

module.exports = app;
