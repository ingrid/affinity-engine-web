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

export default Component.extend({
  tagName: '',

  currentRouteName: alias('applicationController.currentRouteName'),

  init(...args) {
    this._super(...args);

    set(this, 'applicationController', getOwner(this).lookup('controller:application'));
  },

  isActive: computed('currentRouteName', 'fullRoute', {
    get() {
      const currentRouteName = get(this, 'currentRouteName') || '';
      const fullRoute = get(this, 'fullRoute');

      return (currentRouteName || '').indexOf(`${fullRoute}.`) === 0;
    }
  }).readOnly(),

  fullRoute: computed('parentRoute', 'route', {
    get() {
      const { parentRoute, route } = getProperties(this, 'parentRoute', 'route');

      return isPresent(parentRoute) ? `${parentRoute}.${route}` : route;
    }
  }).readOnly()
});
