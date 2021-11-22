const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("welcome to nodejs week3 homework"));
app.get("/calculator/add", (req, res) => {
    const { first, second } = req.query;
    res.send(`<h1>Addition of given numbers :  ${parseInt(first) + parseInt (second)}</h1>`);
});
app.get("/calculator/multiply", (req, res) => {
    const { first, second } = req.query;
    res.send(`<h1>Multiplication of given numbers : ${parseInt(first) * parseInt(second)}</h1>`);
});
app.get("/calculator/subtraction", (req, res) => {
    const { first, second } = req.query;
    res.send(`<h1>Substraction of given numbers : ${parseInt(first) - parseInt(second)}</h1>`);
});
app.get("/calculator/division", (req, res) => {
    const { first, second } = req.query;
    res.send(`<h1>Division of given numbers : ${parseInt(first) / parseInt(second)}</h1>`);
});
app.post("/calculator/add", (req, res) => {
    const { first, second } = req.body;
    res.send(`<h1>Addition of given numbers :  ${parseInt(first) + parseInt (second)}</h1>`);
});
app.post("/calculator/multiply", (req, res) => {
    const { first, second } = req.body;
    res.send(`<h1>Multiplication of given numbers : ${parseInt(first) * parseInt(second)}</h1>`);
});
app.post("/calculator/subtraction", (req, res) => {
    const { first, second } = req.body;
    res.send(`<h1>Substraction of given numbers : ${parseInt(first) - parseInt(second)}</h1>`);
});
app.post("/calculator/division", (req, res) => {
    const { first, second } = req.body;
    res.send(`<h1>Division of given numbers : ${parseInt(first) / parseInt(second)}</h1>`);
});


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
