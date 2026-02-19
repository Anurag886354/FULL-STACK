const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Card API Server ");
});
let cards = [
  { id: 1, suit: "hearts", value: "ace", collection: "classic" }
];
app.get("/api/cards", (req, res) => {
  res.json(cards);
});
app.post("/api/cards", (req, res) => {
  const { suit, value, collection } = req.body;
  if (!suit || !value || !collection) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newCard = {
    id: Date.now(),
    suit,
    value,
    collection
  };

  cards.push(newCard);
  res.status(201).json(newCard);
});
app.put("/api/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const card = cards.find(c => c.id === id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }
  card.suit = req.body.suit || card.suit;
  card.value = req.body.value || card.value;
  card.collection = req.body.collection || card.collection;

  res.json(card);
});
app.delete("/api/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = cards.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Card not found" });
  }

  cards.splice(index, 1);

  res.json({ message: "Card deleted successfully" });
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
