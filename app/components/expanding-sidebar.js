import Ember from 'ember';

const {
  Component,
  computed,
  get,
  isPresent
} = Ember;

const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['menu'],
  tagName: 'ul',

  shouldNest: true,

  routeSequencer: service(),

  routes: computed({
    get() {
      const parentRoute = get(this, 'parentRoute');
      const suffix = isPresent(parentRoute) ? `.${parentRoute.split('.').join('.routes.')}.routes` : '';

      return get(this, `routeSequencer.routes${suffix}`);
    }
  })
});
