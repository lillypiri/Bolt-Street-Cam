
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('marks', table => {
    table.increments();

    table.string('mark_type', 2);
    table.integer('mark_number');
    table.string('mark_id');
    table.decimal('easting', 11, 4);
    table.decimal('northing', 11, 4);
    table.integer('zone', 4);
    table.decimal('latitude', 12, 9);
    table.decimal('longitude', 12, 9);

    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('marks');
};
