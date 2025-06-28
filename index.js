const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/bale-webhook", async (req, res) => {
  try {
    console.log("Received from Bale:", req.body);
    await axios.post("https://abc123.ngrok.io/webhook/bale-webhook", req.body);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Bridge is running ✅");
});

module.exports = app;
