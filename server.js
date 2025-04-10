const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let lastUrl = "";
let convertedLink = "";

// POST /api/new-link
app.post("/api/new-link", (req, res) => {
  const { url } = req.body;
  lastUrl = url;
  // Symulacja wygenerowanego linka Linkvertise
  convertedLink = `https://linkvertise.com/123456/${Math.floor(Math.random() * 100000)}`
  console.log(`Otrzymano: ${url}`);
  res.json({ status: "received" });
});

// GET /api/result
app.get("/api/result", (req, res) => {
  if (convertedLink) {
    res.json({ link: convertedLink });
    convertedLink = ""; // wyczyść po zwróceniu
  } else {
    res.json({ link: null });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
