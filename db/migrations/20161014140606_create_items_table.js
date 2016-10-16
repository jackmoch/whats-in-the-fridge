'use strict'
// knex migrate:make create_fridge_table in cli made this table
// const knex = require('knex')

module.exports.up = (knex, Promise) => {
	return knex.schema.createTable('Items', (table) => {
		// Creates column id
		table.increments('item_id')
		// Creating column headers
		table.string('item_name')
		table.string('item_type')
		table.string('item_add_date')
		table.string('item_exp_date')
		table.string('item_amount')
		table.integer('user_id').references('Users.id')
	})  
};

module.exports.down = (knex, Promise) => {
	return knex.schema.dropTableIfExists('Items')  
};