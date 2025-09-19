import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Chat endpoint
app.post("/chat", (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message missing" });

  const reply = `You said: "${message}". I'm here to help!`;
  res.json({ reply });
});

// SIP calculation endpoint
app.post("/sip", (req, res) => {
  const { principal, rate, months } = req.body;

  if (!principal || !rate || !months)
    return res.status(400).json({ error: "Missing parameters" });

  const monthlyRate = rate / 100 / 12;
  const sipValue =
    (principal * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)) *
    (1 + monthlyRate);

  res.json({ finalAmount: parseFloat(sipValue.toFixed(2)) });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
