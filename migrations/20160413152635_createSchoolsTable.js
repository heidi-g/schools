exports.up = function(knex, Promise) {

return knex.schema.createTableIfNotExists('schoolsTable', function (table) {

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
  return knex.schema.dropTableIfExists('schoolsTable').then(function () {
    console.log('schoolTable was dropped')
  })

};
