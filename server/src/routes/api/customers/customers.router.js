const express = require('express');
const { httpGetAllCustomers, httpGetCustomer, httpCreateCustomer, httpDeleteCustomer } = require('./customers.controller');

const customersRouter = express.Router();

customersRouter.get('/', httpGetAllCustomers);
customersRouter.get('/:id', httpGetCustomer);
customersRouter.post('/', httpCreateCustomer);
customersRouter.delete('/:id', httpDeleteCustomer);

module.exports = customersRouter;