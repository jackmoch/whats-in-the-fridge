'use strict';

const knex = require('knex')

module.exports.up = (knex, Promise) => {
	return knex.schema.table('Users', (table) => {
		table.integer('fridge_id')
	})
}

module.exports.down = (knex, Promise) => {
	return knex.table('Users', (table) => {
		table.dropColumn('fridge_id')
	})
}