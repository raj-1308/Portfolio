require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const result = await client.messages.create({
  from: "whatsapp:+14155238886",   
  to: "whatsapp:+917777021159",   
  body: `New message from ${name} (${email}):\n${message}`,
});

    console.log("✅ Message sent:", result.sid);
    res.status(200).json({ message: "Message sent successfully ✅" });
  } catch (err) {
    console.error("Twilio Error:", err.message, err.code);
  res.status(500).json({ message: "Failed: " + err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running! ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
