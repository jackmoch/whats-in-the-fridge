'use strict';

const knex = require('knex')

module.exports.up = (knex, Promise) => {
	return knex.schema.createTable('Users', (table) => {
		table.increments().unique()
		table.string('first_name')
		table.string('last_name')
	})
}

module.exports.down = (knex, Promise) => {
	return knex.schema.dropTableIfExists('Users')
}