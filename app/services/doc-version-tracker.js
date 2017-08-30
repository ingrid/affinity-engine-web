import Ember from 'ember';

const {
  Service,
  get,
  set
} = Ember;

export default Service.extend({
  init(...args) {
    this._super(...args);

    set(this, 'version', get(this, 'versions')[0]);
  },

  versions: [
    '0_2_0',
    '0_1_0'
  ]
});
