const fs = require('fs');
const path = require('path');

// Emulates a Mongo DB
const database = {
  customers: []
};

// Emulates an API request to a DB using a local file
// Similar to fetch('db/endpoint')
const loadCustomers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '..', '..', '..', 'data', 'customers.json'),
      'utf8',
      (err, data) => {
        if (err) {
          console.error('There has been an error when loading the customers.')
          return reject(err);
        }

        const customers = JSON.parse(data);

        database.customers = customers;
        console.log(`The database has been populated with ${customers.length} customers.`)

        return resolve(true);
      }
    );
  })
}

const getAllCustomers = () => {
  try {
    return database.customers;
  } catch (error) {
    throw error;
  }
}

const getCustomerById = customerId => {
  try {
    const customers = database.customers;
    const customer = customers.find(customer => customer.id === customerId);
    return customer;
  } catch (error) {
    throw error;
  }
}

const createCustomer = (customerData = {}) => {
  try {
    const customers = database.customers;
    const newCustomer = { id: getLastCustomer().id + 1, ...customerData };
    customers.push(newCustomer);
    return newCustomer;
  } catch (error) {
    throw error;
  }
}

const deleteCustomerById = customerId => {
  try {
    const customerIndex = database.customers.findIndex(customer => customer.id === customerId);
    // Remove customer from DB using his index
    database.customers.splice(customerIndex, 1);
        
    return true;
  } catch (error) {
    throw error;
  }
}

const existsCustomerWithId = customerId => {
  try {
    const customers = database.customers;
    const customerExists = customers.some(customer => customer.id === customerId);

    return (customerExists);
  } catch (error) {
    throw error;
  }
}

const getLastCustomer = () => {
  try {
    const lastCustomer = database.customers.sort((a, b) => a.id - b.id).at(-1);
    return lastCustomer;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  loadCustomers,
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
  createCustomer,
  existsCustomerWithId
}