const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async(request, response) => {
    try {
        response.json(reviews);
        console.log("in/api/reviews");
    } catch (error) {
        throw error;
    }
});
//Respond with the json for the review with the corresponding id 
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const reviewId = reviews.filter((review) => review.id === parseInt(id));
        if (reviewId < 1) {
            res.send(`<h1> Review Id : ${id} not found ! Please enter valid Id</h1>`);
        } else {
            res.send(reviewId);
        }
    } catch (error) {
        throw error;
    }
});

module.exports = router;