'use strict'

const User = require('../models/User')

module.exports.seed = (knex, Promise) =>
  new User({
    first_name: 'Brian',
    last_name: 'Smith'
  }).save()
