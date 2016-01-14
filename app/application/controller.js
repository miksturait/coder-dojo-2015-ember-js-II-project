import Ember from 'ember';

export default Ember.Controller.extend({
  appName: "Chirper",
  showAppName: true,
  showingComposeModal: false,
  actions: {
    toggleComposeModal() {
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    }
  }
});
