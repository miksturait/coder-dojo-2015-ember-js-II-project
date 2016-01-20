import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  relationships: ['chirps', 'followees', 'followers'],
  includes: ['users']
});
