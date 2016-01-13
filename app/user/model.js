import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  username: DS.attr('string'),
  numberOfFollowing: DS.attr('number'),
  numberOfFollowers: DS.attr('number'),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),

  chirps: DS.hasMany('chirps'),
  numberOfChirps: Ember.computed('chirps', function() {
    return this.get('chirps').get('length')
  })
});
