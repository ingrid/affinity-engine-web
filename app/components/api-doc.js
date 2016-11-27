import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  header: computed('path', {
    get() {
      return `api-headers.${get(this, 'path')}`;
    }
  }),

  body: computed('path', {
    get() {
      return `api.${get(this, 'path')}`;
    }
  })
});
