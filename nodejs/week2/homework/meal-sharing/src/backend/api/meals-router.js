const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
//Respond with the json for all the meals
router.get("/", async(request, response) => {
    try {
        response.json(meals);
    } catch (error) {
        throw error;
    }
});
//Respond with the json for the meal with the corresponding id
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const mealWithId = meals.filter((meal) => meal.id === parseInt(id));
        if (mealWithId < 1) {
            res.send(`<h1> Meal Id : ${id} not found ! Please enter valid Id</h1>`);
        } else {
            res.send(mealWithId);
        }
    } catch (error) {
        throw error;
    }
});
router.get('/', (req, res) => {
    const parameters = {
        maxPrice: req.query.maxPrice,
        title: req.query.title,
        createdAfter: req.query.createdAfter,
        limit: req.query.limit,
    };
    if (parameters.maxPrice) {
        const smallerThanMaxPrice = meals.filter(meal => meal.price < parameters.maxPrice);
        res.send(smallerThanMaxPrice);
        console.log(smallerThanMaxPrice);
    } else if (parameters.title) {
        const sameTitle = meals.filter(meal => meal.title.includes(parameters.title));
        res.send(sameTitle);
    } else if (parameters.createdAfter) {
        const createdAfterMeals = meals.filter(meal => {
            return new Date(meal.createdAt) > new Date(parameters.createdAfter);
        });
        res.send(createdAfterMeals);
    } else if (parameters.limit) {
        mealsLimit = meals.slice(0, parameters.limit);
        res.send(mealsLimit);
    } else {
        res.send('<h1>invalid query parameter</h1>');
    }
});
module.exports = router;