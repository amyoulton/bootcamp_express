const knex = require("./connection");

const query = knex("posts")
  .where("id", "<=", "5")
  .update({
    title: "Sparkled"
  });

console.log(query.toString());

query.then(result => {
  // The result returned from executing an 'update' is the number
  // of rows affected by that update
  console.log(result);
//   knex.destroy();
});

// Delete all posts but one
const deleteQuery = knex("posts")
  .where("id", "!=", "1")
  .del();

console.log(deleteQuery.toString());

deleteQuery.then(result => {
  console.log("deleteQuery: ", deleteQuery);
});

// let's select all posts after deleting them, so now we should get back one post if our delete worked
const query3 = knex.raw('SELECT * FROM posts');
console.log(query3.toString());
query3.then(result => {
    console.log(result.rows);
    knex.destroy();
})