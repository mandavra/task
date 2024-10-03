
const { usertaskSchema } = require("../models");

const addusertask = (body) => {
  return usertaskSchema.create(body);
};

const getusertask = () => {
  return usertaskSchema.find();
};

const deleteusertask = (id) => {
  return usertaskSchema.findByIdAndDelete(id);
};

const updateusertask = (id, body) => {
  return usertaskSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addusertask,
  getusertask,
  deleteusertask,
  updateusertask,
};