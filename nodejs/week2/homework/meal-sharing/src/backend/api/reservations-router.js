const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");
router.get("/", async(request, response) => {
    try {
        response.json(reservations);
        console.log("in/api/reservations");
    } catch (error) {
        throw error;
    }
});
//Respond with the json for the reservation with the corresponding id 
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const reservationId = reservations.filter((reservation) => reservation.id === parseInt(id));
        if (reservationId < 1) {
            res.send(`<h1> Reservation Id : ${id} not found ! Please enter valid Id</h1>`);
        } else {
            res.send(reservationId);
        }
    } catch (error) {
        throw error;
    }
});



module.exports = router;