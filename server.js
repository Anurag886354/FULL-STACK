const express = require("express");
const bookingSystem = require("./booking-system");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/book", bookingSystem.bookSeat);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Ticket Booking System running on port ${PORT}`);
});
