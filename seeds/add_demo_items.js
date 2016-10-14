'use strict'

const Item = require('../models/Item')

module.exports.seed = (knex, Promise) => {
  new Item({
    item_name: 'Anchor Steam Porter',
    item_type: 'beer',
    item_add_date: '10-14-2016',
    item_exp_date: '11-03-2016',
    item_amount: '6-pack',
    user_id: 1
  }).save()

  new Item({
    item_name: 'porterhouse steak',
    item_type: 'meat',
    item_add_date: '10-14-2016',
    item_exp_date: '10-21-2016',
    item_amount: '32 oz.',
    user_id: 1
  }).save()
}
