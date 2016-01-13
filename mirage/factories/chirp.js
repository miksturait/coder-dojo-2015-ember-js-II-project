import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() {
    return faker.lorem.sentence();
  },
  createdAt() {
    return new Date((Date.now() - Math.round(Math.random() * 10000000)))
  }
});
