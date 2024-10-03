const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const usertaskRoute=require("./usertask.route")
route.use("/user", userRoute);
route.use("/usertask", usertaskRoute);
module.exports = route;
