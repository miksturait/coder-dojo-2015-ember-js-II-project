import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  chirps: hasMany(),
  followees: hasMany('user')
  //followers: hasMany('user')
});
