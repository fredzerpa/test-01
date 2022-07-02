const Ajv = require("ajv");
const { getAllCustomers, getCustomerById, existsCustomerWithId, createCustomer, deleteCustomerById } = require('../../../models/customers/customers.model');
const { formatObjectValues } = require("../../../utils/functions");

const ajv = new Ajv({ allErrors: true });

const httpGetAllCustomers = (req, res) => {
  try {
    return res.status(200).json(getAllCustomers());
  } catch (err) {
    // TODO: Customize error response
    return res.status(500).json({ ...err, message: err.message });
  }
}

const httpGetCustomer = (req, res) => {
  try {
    const { id } = req.params;

    const customerExists = existsCustomerWithId(Number(id));
    if (!customerExists) return res.status(404).json({
      message: 'Customer not found',
    });

    return res.status(200).json(getCustomerById(Number(id)))
  } catch (err) {
    // TODO: Customize error response
    return res.status(500).json({ ...err, message: err.message });
  }
}

const httpCreateCustomer = (req, res) => {
  try {
    const customer = req.body;

    // Validation requirements
    const customerSchema = {
      type: 'object',
      properties: {
        first_name: {
          type: 'string'
        },
        last_name: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        gender: {
          type: 'string'
        },
        image: {
          type: 'string'
        },
      },
      required: ['first_name', 'last_name', 'email', 'gender', 'image'],
      additionalProperties: false,
    }

    // Check for any incongruity on the Data entry
    const isDataValid = ajv.validate(customerSchema, customer);
    if (!isDataValid) return res.status(400).json({
      message: 'Data entry no valid',
      // Customized error response from ajv library
      errors: ajv.errors.map(error => ({ type: `${error.instancePath.replace('/', '')} ${error.message}`.trim() }))
    })

    // Format all entry data to lower case for db standarization
    const formattedCustomerData = formatObjectValues(customer, { format: value => value.toLowerCase(), exclude: ['image'] });
    return res.status(201).json(createCustomer(formattedCustomerData));
  } catch (err) {
    // TODO: Customize error response
    return res.status(500).json({ ...err, message: err.message });
  }
}

const httpDeleteCustomer = (req, res) => {
  try {
    const { id } = req.params;

    const customerExists = existsCustomerWithId(Number(id));
    if (!customerExists) return res.status(404).json({
      message: 'Customer not found',
    });

    const isDeleted = deleteCustomerById(Number(id));
    if (!isDeleted) {
      throw new Error('Error on deleting customer')
    }

    // Everything went smoothly.
    return res.status(200).json({
      ok: true,
    })
  } catch (err) {
    // TODO: Customize error response
    return res.status(500).json({ ...err, message: err.message });
  }
}

module.exports = {
  httpGetAllCustomers,
  httpGetCustomer,
  httpCreateCustomer,
  httpDeleteCustomer,
}