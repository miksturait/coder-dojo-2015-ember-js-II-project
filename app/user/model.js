import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

import Ember from 'ember';

export default Model.extend({
  username: attr('string'),
  aboutMe: attr('string'),
  //joinedAt: attr('date'),

  chirps: hasMany('chirps'),

  followees: hasMany('user', {
    inverse: 'followers'
  }),
  followers: hasMany('user', {
    inverse: 'followees'
  }),

  numberOfChirps: Ember.computed('chirps', function () {
    return this.get('chirps').get('length');
  }),
  numberOfFollowing: Ember.computed('followees', function () {
    return this.get('followees').get('length');
  }),
  numberOfFollowers: Ember.computed('followers', function () {
    return this.get('followers').get('length');
  })
});
