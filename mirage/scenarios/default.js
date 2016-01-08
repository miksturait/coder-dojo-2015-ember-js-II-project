export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  let users = server.createList('user', 2);
  users.forEach((user) => server.createList('chirp', 5, {user_id: user.id}))

}
