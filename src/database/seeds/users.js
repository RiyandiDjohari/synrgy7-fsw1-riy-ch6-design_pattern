/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'johndoe', password: "12345", email: "johndoe@gmail.com", role: "user"},
    {id: 2, username: 'janedoe', password: "12345", email: "janedoe@gmail.com", role: "user"},
    {id: 3, username: 'joshdoe', password: "12345", email: "joshdoe@gmail.com", role: "user"},
  ]);
};
