const config = require('../knexfile').development
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

// creates Item model for the Item table
module.exports = bookshelf.Model.extend({
  tableName: 'Items'
})
