const express = require("express");
const data = require("../data");

let router = express.Router();
const SUCCESS = 200;

router.use(express.json());


// GET all accounts
router.get("/accounts", (request, response) => {
  response.status(SUCCESS).send(data.get_all_accounts());
  console.log("get all accounts");
});

// GET account id by account_id
router.get("/account/by-id", (request, response) => {
  let account = data.get_account_by_account_id(request.query.account_id);
  response.status(SUCCESS).send(account);
  console.log("get account by account_id");
});
// Insert Account
router.post("/add_account", (request, response) => {
  console.log("add account " + JSON.stringify(request.body));
  data.add_account(request.body);
  response.status(SUCCESS).send(`User ${request.body.account_name} added!`);
});


module.exports = { router };
