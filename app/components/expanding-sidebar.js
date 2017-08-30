import Ember from 'ember';

const {
  Component,
  computed,
  get,
  isPresent
} = Ember;

const { reads } = computed;
const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['menu', 'vertical'],
  tagName: 'ul',

  shouldNest: true,

  routeSequencer: service(),
  versionTracker: service('doc-version-tracker'),

  version: reads('versionTracker.version'),

  routes: computed({
    get() {
      const parentRoute = get(this, 'parentRoute');
      const suffix = isPresent(parentRoute) ? `.${parentRoute.split('.').join('.routes.')}.routes` : '';

      return get(this, `routeSequencer.routes${suffix}`);
    }
  })
});
