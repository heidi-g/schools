
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('schools').del(),

    // Inserts seed entries
    // knex('schools').insert({id: 231, name: 'Tawa College', longitude: '174.830508', latitude: '-41.164996'}),
    knex('schools').insert({id: 242, name: 'Wellington Girls', longitude: '174.780673', latitude: '-41.275422'}),
    knex('schools').insert({id: 245, name: 'Wellington College', longitude: '174.781374', latitude: '-41.303611'}),
    knex('schools').insert({id: 247, name: 'Ronatai College', longitude: '174.80066', latitude: '-41.4321848'}),
    knex('schools').insert({id: 250, name: 'Samuel Marsden', longitude: '174.744353', latitude: '-41.283945'}),
    knex('schools').insert({id: 231, name: 'Scots College', longitude: '174.818441', latitude: '-41.326932'})

  );
};
