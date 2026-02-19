const { createClient } = require("redis");

const client = createClient();

(async () => {
    await client.connect();
})();

let availableSeats = 100;

exports.bookSeat = async (req, res) => {
    const seatId = "seat-lock";

    try {
        const lock = await client.set(seatId, "locked", {
            NX: true,
            EX: 5
        });

        if (!lock) {
            return res.status(400).json({
                success: false,
                message: "Seat is being booked by someone else"
            });
        }

        if (availableSeats <= 0) {
            return res.status(400).json(artillery run load-test.yml{
                success: false,
                message: "No seats available"
            });
        }

        availableSeats--;

        const bookingId = Date.now();

        res.status(200).json({
            success: true,
            bookingId,
            remaining: availableSeats
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error"
        });

    } finally {
        await client.del(seatId);
    }
};
