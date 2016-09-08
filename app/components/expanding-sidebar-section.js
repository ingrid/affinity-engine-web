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
  alias,
  and,
  notEmpty
} = computed;

const { String: { camelize } } = Ember;
const { inject: { service } } = Ember;

export default Component.extend({
  tagName: '',

  currentRouteName: alias('applicationController.currentRouteName'),

  init(...args) {
    const applicationController = getOwner(this).lookup('controller:application');

    set(this, 'applicationController', applicationController);

    return this._super(...args);
  },

  isActive: computed('currentRouteName', 'fullRoute', {
    get() {
      const {
        currentRouteName,
        fullRoute
      } = getProperties(this, 'currentRouteName', 'fullRoute');

      return currentRouteName.indexOf(`${fullRoute}.`) === 0;
    }
  }).readOnly(),

  fullRoute: computed('parentRoute', 'route', {
    get() {
      const { parentRoute, route } = getProperties(this, 'parentRoute', 'route');

      return isPresent(parentRoute) ? `${parentRoute}.${route}` : route;
    }
  }).readOnly()
});
