// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Twilio credentials from .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsApp = process.env.TWILIO_WHATSAPP_FROM;
const toWhatsApp = process.env.TWILIO_WHATSAPP_TO;

const client = twilio(accountSid, authToken);

const app = express();
app.use(cors()); // Allow frontend requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  try {
    // Send WhatsApp message via Twilio
    await client.messages.create({
      from: `whatsapp:${fromWhatsApp}`,
      to: `whatsapp:${toWhatsApp}`,
      body: `New message from ${name} (${email}):\n\n${message}`,
    });

    console.log('Message sent via WhatsApp:', { name, email, message });
    res.json({ message: 'Message sent successfully ✅' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ message: 'Failed to send message ❌' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
