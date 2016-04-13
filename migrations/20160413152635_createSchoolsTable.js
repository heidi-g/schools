
exports.up = function(knex, Promise) {

  table.increments()
  table.string("name")
  table.string("telephone")
  table.string("email")
  table.string("principal")
  table.string("street")
  table.string("suburb")
  table.string("city")
  table.intiger("longitude")
  table.intiger("latitude")
};

exports.down = function(knex, Promise) {

};
