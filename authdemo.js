// demonstration of using Auth0 to login users before allowing access to endpoints
// to step through this, see James Quick's video tutorial at https://www.youtube.com/watch?v=QQwo4E_B0y8

const express = require("express");
const bodyParser = require("body-parser");
//import express from "express";

const data = require("./data");
const app = express();
require("dotenv").config();

const PORT = 3000;

const { auth, requiresAuth } = require("express-openid-connect");
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

app.use(bodyParser.json());

// req.isAuthenticated is provided from the auth router
app.get("/", (request, response) => {
  response.send(request.oidc.isAuthenticated() ? "<h1>Logged in</h1>" : "<h1>Logged out</h1>");
});

app.get("/profile", requiresAuth(), (request, response) => {
  response.send(JSON.stringify(request.oidc.user));
});
// GET all users
app.get("/users", requiresAuth(), (request, response) => {
  response.status(200).send(data.get_all_users());
  console.log("get all users");
});
// GET user id by user_id
app.get("/user/by-uid", requiresAuth(), (request, response) => {
  let user = data.get_user_by_user_id(request.query.user_id);
  response.status(200).send(user);
  console.log("getUser by user_id");
});
// Insert User
app.post("/add_user", requiresAuth(), (request, response) => {
  console.log("add user " + JSON.stringify(request.body));
  data.add_user(request.body);
  response.status(200).send(`User ${request.body.first_name} added!`);
});

// GET all accounts
app.get("/accounts", requiresAuth(), (request, response) => {
  response.status(200).send(data.get_all_accounts());
  console.log("get all accounts");
});

// GET account id by account_id
app.get("/account/by-id", requiresAuth(), (request, response) => {
  let account = data.get_account_by_account_id(request.query.account_id);
  response.status(200).send(account);
  console.log("get account by account_id");
});
// Insert Account
app.post("/add_account", requiresAuth(), (request, response) => {
  console.log("add account " + JSON.stringify(request.body));
  data.add_account(request.body);
  response.status(200).send(`User ${request.body.account_name} added!`);
});
const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log(process.env.PORT);
  console.log(`Listening on port ${port}`);
});
