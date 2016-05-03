exports.up = function(knex, Promise) {
    console.log('schoolsTable created')

return knex.schema.createTableIfNotExists('schools', function (table) {
  table.increments()
  table.string("name")
  table.string("telephone")
  table.string("email")
  table.string("principal")
  table.string("street")
  table.string("suburb")
  table.string("city")
  table.float("longitude")
  table.float("latitude")
})

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schools').then(function () {
    console.log('schoolsTable was dropped')
  })

};
