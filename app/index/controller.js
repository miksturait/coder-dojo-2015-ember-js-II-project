import Ember from 'ember';

export default Ember.Controller.extend({
  valuesChanged: Ember.observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),

  actions: {
    login() {
      let username = this.get('username'),
        password = this.get('password');
      if (username === 'letme' && password === 'in') {
        this.transitionToRoute('home');
      } else {
        this.set('errorMessage', 'Wrong username or password!');
      }
    }
  }
});
