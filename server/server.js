'use strict'

const express = require('express')
const config = require('../knexfile').development
const knex = require('knex')(config)
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('client'))
app.use(bodyParser.json())

app.set('port', port)

app.get('/api/allUsers', (req, res) => {
	knex('Users')
		.select('*')
		.then((data) => {
			res.json(data)
		})
})

app.get('/api/allItems', (req, res) => {
	knex('Items')
		.select('*')
		.then((data) => {
		})
})

app.post('/api/newUser', (req, res) => {
	knex('Users')
		.insert(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.post('/api/newItem', (req, res) => {
	knex('Items')
		.insert(req.body)
		.then((data) => {
			res.json(data)
		})
})

app.get('/api/getItems/:user_id', (req, res) => {
	let user_id = req.params.user_id
	knex('Items')
		.select('*')
		.where('user_id', user_id)
		.then((data) => {
			res.json(data)
		})

})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
