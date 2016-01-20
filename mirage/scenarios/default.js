export default function (server) {

  let users = [
    server.create('user'),
    server.create('user'),
    server.create('user', {followersIds: [1]}),
    server.create('user', {followersIds: [1]}),
    server.create('user', {followersIds: [4,3,2,1], followeesIds: [2,1]})
  ];
  users.forEach((user) => server.createList('chirp', 5, {userId: user.id}));
}
