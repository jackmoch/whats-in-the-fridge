'use strict'

const express = require('express')

const port = process.env.PORT || 3000
const app = express() 

app.set('port', port)

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})