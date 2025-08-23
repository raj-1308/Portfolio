// client/api/contact.js
import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  try {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      to: `whatsapp:${process.env.TWILIO_WHATSAPP_TO}`,
      body: `New message from ${name} (${email}):\n\n${message}`
    });

    console.log('WhatsApp message sent:', { name, email, message });
    res.status(200).json({ message: 'Message sent successfully ✅' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send message ❌' });
  }
}
