const Joi = require("joi");

const addusertask = {
  body: Joi.object().keys({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    location: Joi.string().required().trim(),
    contactNumber: Joi.number().required(),
    email: Joi.string().email().required().trim(), 
    password: Joi.string().min(8).required().trim(), 
    role: Joi.string().required().trim(),
  }),
};

module.exports = {
  addusertask,
};
