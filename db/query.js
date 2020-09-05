const knex = require('./connection');

// Select all posts whose title ends with the letter e

// const query = knex
//   .select("*")
//   .from("posts")
//   .where("title", "ilike", "%e");

// console.log(query.toString());

// query.then(result => {
//   console.log(result);
// });

// select the last 10 posts
knex
  .select('*')
  .from('posts')
  .limit(10)
  .then(data => {
    // If the query is successful, the result from it
    // will be returned as an array of objects where
    // object corresponds to a row in the table where
    // its keys correspond to the columns of the table.
    // You can use console.table() to display array of
    // objects as a table
    // console.table(data);
    // console.log(data);
  });

//   Count the number of posts, find the maxumum id, find the sum of ids from posts table

const myQuery = knex
  .count('* as postCount')
  .max('id as maxId')
  .sum('id as totalOfIds')
  .from('posts');
// or you can type the above query:
//   .raw(
//     `select count(*) as "postCount", max("id") as "maxId", sum("id") as "totalOfIds" from "posts"`
//   );

console.log(myQuery.toString());

myQuery.then(data => {
  console.table(data);
  knex.destroy();
});
