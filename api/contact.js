const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// We don’t need express.listen(), Vercel handles it
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  console.log("Message received:", req.body);

  // Here your WhatsApp logic goes (Twilio / other API)
  res.json({ message: 'Message sent successfully ✅' });
});

module.exports = app;
