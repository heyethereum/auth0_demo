const express = require("express");

let app = express();
const PORT = 3000;

let router = express.Router();
app.use(express.json());

router.get("/", (request, response) => {
  response.status(200).send("Welcome to the correct end point");
});

router.get("/special", (request, response) => {
  response.status(200).send("special here");
});
router.get("/person", (request, response) => {
  response.status(200).send(`Hello ${request.query.name}`);
});
router.post("/insert", (request, response) => {
  response.status(200).send(`First name: ${request.body.first_name} | Last name: ${request.body.last_name}`);
});

app.use(router);

app.listen(PORT, (errors) => {
  errors
    ? console.log(errors)
    : console.log(`Listening on localhost port ${PORT}`);
});
