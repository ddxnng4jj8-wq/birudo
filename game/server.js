const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let guides = [
  {
    id: 1,
    gameTitle: "モンスターハンター",
    title: "ボス攻略",
    content: "弱点は炎属性です"
  }
];

app.get("/api/guides", (req, res) => {
  res.json(guides);
});

app.get("/api/guides/:id", (req, res) => {
  const id = Number(req.params.id);
  const guide = guides.find(g => g.id === id);

  if (!guide) {
    return res.status(404).json({ message: "Not Found" });
  }

  res.json(guide);
});

app.post("/api/guides", (req, res) => {
  const { gameTitle, title, content } = req.body;

  const guide = {
    id: guides.length + 1,
    gameTitle,
    title,
    content
  };

  guides.push(guide);

  res.status(201).json(guide);
});

app.delete("/api/guides/:id", (req, res) => {
  const id = Number(req.params.id);

  guides = guides.filter(g => g.id !== id);

  res.json({ message: "削除しました" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});