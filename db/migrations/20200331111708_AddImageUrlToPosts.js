
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', table => {
      table.string('imageUrl')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table("posts", table => {
      // Alter table "posts"
      table.dropColumn("imageUrl"); // DROP COLUMN "imageUrl"
    });
  };
