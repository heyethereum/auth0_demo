const express = require("express");
// const database = require("../data");
const database = require("../database");
const cors = require("cors");


let router = express.Router();
const SUCCESS = 200;

router.use(express.json());
router.use(cors());

router.get("/users", (request, response) => {
  //response.status(SUCCESS).send(database.get_all_users());
  database.connection.query("SELECT * FROM users", (errors, records) => {
    if (errors) {
      console.log("errors");
      response.status(500).send("Error 500");
    } else {
      response.status(SUCCESS).send(records);
    }
  });
});

router.get("/user/by-uid", (request, response) => {
  let user = database.get_user_by_user_id(request.query.user_id); //request.query is for GET
  response.status(SUCCESS).send(user);
  console.log("getUser by user_id");
});

router.post("/insert_user", (request, response) => {
  /* database.add_user(request.body); // request.body for POST method, JSON in this case
  response.status(SUCCESS).send(`User ${request.body.first_name} added!`);
  console.log(`User ${request.body.first_name} added!`); */
  database.connection.query(
    `INSERT into 
      users(user_name, user_email, user_dob)
     VALUES
      ("${request.body.name}",
      "${request.body.email}",
      "${request.body.dob}" )`,
    (errors, records) => {
      if (errors) {
        console.log("errors");
        response.status(500).send("Error 500");
      } else {
        response.status(SUCCESS).send(records);
        console.log(records);
      }
    }
  );
});

router.delete("/delete_user", (request, response) => {
  /* database.add_user(request.body); // request.body for POST method, JSON in this case
  response.status(SUCCESS).send(`User ${request.body.first_name} added!`);
  console.log(`User ${request.body.first_name} added!`); */
  database.connection.query(
    `DELETE FROM users WHERE user_id = "${request.query.user_id}"`,
    (errors, records) => {
      if (errors) {
        console.log("errors");
        response.status(500).send("Error 500");
      } else {
        response.status(SUCCESS).send(records);
        console.log(records);
      }
    }
  );
});

module.exports = { router };
