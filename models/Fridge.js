const config = require('../knexfile').development
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

// creates Fridge model for the Fridge table
module.exports = bookshelf.Model.extend({
	tableName: 'Fridge'
})
