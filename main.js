const express = require("express");
const user_mapping = require("./mapping/user");
const account_mapping = require("./mapping/account");

let app = express();
const PORT = 3000;

//let router = express.Router();
//app.use(router);

app.use(user_mapping.router);
app.use(account_mapping.router);

app.listen(PORT, (errors) => {
  errors
    ? console.log(errors)
    : console.log(`Listening on localhost port ${PORT}`);
});
