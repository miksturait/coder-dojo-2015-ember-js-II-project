import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1
  },
  username(i) {
    return `R2D${i}`
  },
  aboutMe(i) {
    return faker.lorem.sentences(4)
  },
  joinedAt(i) {
    return faker.date.past()
  }
});
