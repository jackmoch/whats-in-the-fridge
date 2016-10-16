const config = require('../knexfile').development
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

// creates User model for the Users table
module.exports = bookshelf.Model.extend({
	tableName: 'Users'
})
