const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) => {
    const { first, second } = req.query;
    res.send(`Addition of given numbers :  ${parseInt(first) + parseInt (second)}`);
});
app.get("/numbers/multiply/:first/:second", (req, res) => {
    const { first, second } = req.params;
    res.send(`Multiplication of given numbers : ${parseInt(first) * parseInt (second)}`);
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));