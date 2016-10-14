'use strict'

const express = require('express')
const config = require('./knexfile').development
const knex = require('knex')(config)

const port = process.env.PORT || 3000
const app = express() 

app.set('port', port)

app.get('/api/allUsers', (req, res) => {
	knex('Users')
		.select('*')
		.then((data) => {
			console.log(data)
		})
})

app.get('/api/allItems', (req, res) => {
	knex('Items')
		.select('*')
		.then((data) => {
			console.log(data)
		})
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})