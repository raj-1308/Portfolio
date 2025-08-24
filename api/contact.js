import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    try {
      const result = await client.messages.create({
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
        to: `whatsapp:${process.env.TWILIO_WHATSAPP_TO}`,
        body: `📩 New Contact Message\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`,
      });

      console.log("Message sent:", result.sid);
      res.status(200).json({ message: "Message sent successfully ✅" });
    } catch (err) {
      console.error("Twilio Error:", err);
      res.status(500).json({ message: "Failed to send message ❌" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
