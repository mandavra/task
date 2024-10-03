const express = require("express");
const validate = require("../middlewares/validate");
const { usertaskController } = require("../controllers");
const usertaskValidation  = require("../validation/usertask.validation.js")
const route = express.Router();

route.get("/get", usertaskController.getusertask);
route.post("/add", validate(usertaskValidation.addusertask), usertaskController.addusertask);
route.put(
  "/update/:id",
  validate(usertaskValidation.addusertask),
  usertaskController.updateusertask
);
route.delete(
  "/delete/:id",
  usertaskController.deleteusertask
);

module.exports = route;