import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  header: computed('path', {
    get() {
      return `api-doc-headers.${get(this, 'path')}`;
    }
  }),

  body: computed('path', {
    get() {
      return `api-doc.${get(this, 'path')}`;
    }
  })
});
