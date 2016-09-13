import Ember from 'ember';

const {
  Component,
  computed,
  get,
  getOwner,
  getProperties,
  isPresent,
  set
} = Ember;

const {
  alias
} = computed;

const { inject: { service } } = Ember;

export default Component.extend({
  routeSequencer: service(),

  currentRouteName: alias('applicationController.currentRouteName'),

  init(...args) {
    this._super(...args);

    set(this, 'applicationController', getOwner(this).lookup('controller:application'));
  },

  headers: computed('currentRouteName', {
    get() {
      const currentRouteSegments = get(this, 'currentRouteName').split('.');
      const routes = get(this, 'routeSequencer.routes');

      return currentRouteSegments.map((segment, index) => {
        const routeSegments = currentRouteSegments.slice(0, index + 1);

        return {
          name: get(routes, `${routeSegments.join('.routes.')}.name`),
          route: routeSegments.join('.'),
          tagName: `h${index + 1}`
        };
      });
    }
  })
});
