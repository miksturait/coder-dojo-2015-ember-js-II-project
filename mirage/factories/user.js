import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1
  },
  username(i) {
    return `R2D${i}`
  },
  numberOfFollowing(i) {
    return faker.random.number()
  },
  numberOfFollowers(i) {
    return faker.random.number()
  },
  aboutMe(i) {
    return faker.lorem.sentences(4)
  },
  joinedAt(i) {
    return faker.date.past()
  }
});
