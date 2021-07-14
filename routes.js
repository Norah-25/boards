

const app = require('express')();
const customer = require('./customers')
const prodcuts = require('./products')
const boards = require('./boards')

app.use('/api/customers', customer)
app.use('/api/products', prodcuts)
app.use('/api/boards', boards)

module.exports = app;