require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  try {
    await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      to: `whatsapp:${process.env.TWILIO_WHATSAPP_TO}`,
      body: `New message from ${name} (${email}):\n\n${message}`,
    });

    res.status(200).json({ message: 'Message sent successfully ✅' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send message ❌' });
  }
});

module.exports = app;
