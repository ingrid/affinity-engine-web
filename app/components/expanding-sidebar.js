import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['menu'],
  tagName: 'ul',

  routeSequencer: service(),

  routes: computed({
    get() {
      return get(this, `routeSequencer.routes.${get(this, 'parentRoute').split('.').join('.routes.')}.routes`);
    }
  })
});
