'use strict'

const Fridge = require('../models/Fridge')

module.exports.seed = (knex, Promise) => {
  new Fridge({
    item_name: 'Anchor Steam Porter',
    item_type: 'beer',
    item_add_date: '10-14-2016',
    item_exp_date: '11-03-2016',
    item_amount: '6-pack'
  }).save()

  new Fridge({
    item_name: 'porterhouse steak',
    item_type: 'meat',
    item_add_date: '10-14-2016',
    item_exp_date: '10-21-2016',
    item_amount: '32 oz.'
  }).save()
}
