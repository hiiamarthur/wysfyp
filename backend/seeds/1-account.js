/*
    set the demo data of account table
*/

exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  await knex("account").del();
  // Account seeds for testing
  // All accounts same password: 1234aA!
  // Account usernames: long, jane, harry, arthur, charlie
  const accounts = [
    {
      username: "long",
      password: "$2b$10$dgmLuMNrlZzEbY0Jmfm6hOTDqu5FnkGjCz1tRURHb9C.1Fprr5vuC",
      displayName: "long",
      email: "1155000000@link.cuhk.edu.hk",
      year: 3,
      major: "Computer Science",
      college: "Shaw College",
      selfIntro: "Hi. I'm friendly. Let's eat!",
    },
    {
      username: "harry",
      password: "$2b$10$dgmLuMNrlZzEbY0Jmfm6hOTDqu5FnkGjCz1tRURHb9C.1Fprr5vuC",
      displayName: "harry",
      email: "1155000000@link.cuhk.edu.hk",
      year: 3,
      major: "Computer Science",
      college: "Lee Woo Sing College",
      selfIntro: "My favourite tea is oolong.",
    },
    {
      username: "jane",
      password: "$2b$10$dgmLuMNrlZzEbY0Jmfm6hOTDqu5FnkGjCz1tRURHb9C.1Fprr5vuC",
      displayName: "jane",
      email: "1155000000@link.cuhk.edu.hk",
      year: 3,
      major: "Computer Science",
      college: "Lee Woo Sing College",
      selfIntro: "I am usually busy but I make time for people.",
    },
    {
      username: "charlie",
      password: "$2b$10$dgmLuMNrlZzEbY0Jmfm6hOTDqu5FnkGjCz1tRURHb9C.1Fprr5vuC",
      displayName: "charlie",
      email: "1155000000@link.cuhk.edu.hk",
      year: 3,
      major: "Computer Science",
      college: "Chung Chi College",
      selfIntro: "Hi :) I like reading and I am friendly.",
    },
    {
      username: "arthur",
      password: "$2b$10$dgmLuMNrlZzEbY0Jmfm6hOTDqu5FnkGjCz1tRURHb9C.1Fprr5vuC",
      displayName: "arthur",
      email: "1155000000@link.cuhk.edu.hk",
      year: 3,
      major: "Computer Science",
      college: "Wu Yee Sun College",
      selfIntro: "Wu Yee Sun College is the best.",
    },
  ]; //json in array

  return knex.batchInsert("account", accounts);
};
