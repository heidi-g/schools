exports.up = function(knex, Promise) {

return knex.schema.createTable('schoolsTable', function (table) {

  table.increments()
  table.string("name")
  table.string("telephone")
  table.string("email")
  table.string("principal")
  table.string("street")
  table.string("suburb")
  table.string("city")
  table.integer("longitude")
  table.integer("latitude")
})

};

exports.down = function(knex, Promise) {

};
