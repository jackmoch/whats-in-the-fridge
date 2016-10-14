'use strict'
// knex migrate:make create_fridge_table in cli made this table
// const knex = require('knex')

module.exports.up = (knex, Promise) => {
	return knex.schema.createTable('Fridge', (table) => {
		// Creates column id
		table.increments('fridge_id')
		// Creating column headers
		table.string('item_name')
		table.string('item_type')
		table.string('item_add_date')
		table.string('item_exp_date')
		table.string('item_amount')
	})  
};

module.exports.down = (knex, Promise) => {
	return knex.schema.dropTableIfExists('Fridge')  
};
