import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i) {
    return i + 1
  },
  username(i) {
    return `R2D${i}`
  },
  numberOfChirps(i) {
    return Math.round((Math.random() * 100))
  },
  numberOfFollowing(i) {
    return Math.round((Math.random() * 100))
  },
  numberOfFollowers(i) {
    return Math.round((Math.random() * 100))
  }
});
