const express = require('express');
const customersRouter = require('./api/customers/customers.router');

const api = express.Router()

api.use('/customers', customersRouter);

module.exports = api;