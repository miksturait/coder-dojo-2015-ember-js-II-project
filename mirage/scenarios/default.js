export default function (server) {

  /*
   Seed your development database using your factories.
   This data will not be loaded in your tests.
   */

  let users = [
    server.create('user', {followeesIds: []}),
    server.create('user', {followeesIds: [1]}),
    server.create('user', {followeesIds: [1, 2], followersIds: [2]})
  ];
  users.forEach((user) => server.createList('chirp', 5, {userId: user.id}));

  //users.forEach(function (user) {
  //  let allExceptMe = users.filter(u => u !== user);
  //  user.update('userIds', allExceptMe.map((u) => u.id));
  //})
}
