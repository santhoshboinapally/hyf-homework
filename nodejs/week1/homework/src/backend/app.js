const express = require("express");
const app = express();
// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const review = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async(request, response) => {
    response.send("Meal Sharing Web App");
});
const mealsWithReviews = meals.map((meal) => {
    // mealWithReview = meal;
    meal.review = review.filter((review) => review.mealId === meal.id);
    return meal;
});
app.get("/meals", async(request, response) => {
    response.json(mealsWithReviews);
});
//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
app.get("/cheap-meals", async(request, response) => {
    const cheapMeals = mealsWithReviews.filter(
        (chepmeal) => chepmeal.price < 70);
    response.json(cheapMeals);
});
//Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async(request, response) => {
    const largeMeals = mealsWithReviews.filter(
        (largemeal) => largemeal.maxNumberOfGuests > 5
    );
    response.json(largeMeals);
});
//Respond with the json for a random meal (including it's reviews)
app.get("/meal", async(request, response) => {
    const randomMeal =
        mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)];
    response.json(randomMeal);
});

//Respond with the json for all reservations

app.get("/reservations", async(request, response) => {
    response.json(reservations);
});

//Respond with the json for a random reservation

app.get("/reservation", async(request, response) => {
    const randomReservation =
        reservations[Math.floor(Math.random() * reservations.length)];
    response.json(randomReservation);
});

module.exports = app;