const express = require("express");
const database = require("../data");

let router = express.Router();
const SUCCESS = 200;

router.use(express.json());

router.get("/users", (request, response) => {
  response.status(SUCCESS).send(database.get_all_users());
});

router.get("/user/by-uid", (request, response) => {
  let user = database.get_user_by_user_id(request.query.user_id); //request.query is for GET
  response.status(SUCCESS).send(user);
  console.log("getUser by user_id");
});

router.post("/insert_user", (request, response) => {
  database.add_user(request.body); // request.body for POST method, JSON in this case
  response.status(SUCCESS).send(`User ${request.body.first_name} added!`);
  console.log(`User ${request.body.first_name} added!`);
});


module.exports = { router };
