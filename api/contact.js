import Twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "All fields are required!" });

  const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      to: `whatsapp:${process.env.TWILIO_WHATSAPP_TO}`,
      body: `📩 New Contact Message\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`,
    });

    res.status(200).json({ message: "Message sent successfully ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send message ❌" });
  }
}
