import Ember from 'ember';

const {
  Component,
  computed,
  get,
  getOwner,
  getProperties,
  isBlank,
  isPresent,
  set
} = Ember;

const { alias } = computed;
const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['menu', 'expanded'],
  tagName: 'ul',

  routeSequencer: service(),

  currentRouteName: alias('applicationController.currentRouteName'),

  init(...args) {
    this._super(...args);

    set(this, 'applicationController', getOwner(this).lookup('controller:application'));
  },

  currentRouteSegment: computed({
    get() {
      return (get(this, 'currentRouteName') || '').split('.')[get(this, 'level')];
    }
  }),

  parentRoute: computed({
    get() {
      return (get(this, 'currentRouteName') || '').split('.').slice(0, get(this, 'level')).join('.');
    }
  }),

  siblingRoutes: computed({
    get() {
      const parentRoute = get(this, 'parentRoute');

      return isPresent(parentRoute) ? get(get(this, 'routeSequencer.routes'), `${parentRoute.split('.').join('.routes.')}.routes`) : '';
    }
  }),

  currentRouteIndex: computed({
    get() {
      return Object.keys(get(this, 'siblingRoutes')).indexOf(get(this, 'currentRouteSegment'));
    }
  }),

  next: computed({
    get() {
      return this._findSibling(1, '>');
    }
  }),

  previous: computed({
    get() {
      return this._findSibling(-1, '<');
    }
  }),

  _findSibling(crawl, arrow) {
    const { currentRouteIndex, level, parentRoute, siblingRoutes } = getProperties(this, 'currentRouteIndex', 'level', 'parentRoute', 'siblingRoutes');
    const key = Object.keys(siblingRoutes)[currentRouteIndex + crawl];

    if (isBlank(key)) { return; }

    const route = isPresent(parentRoute) ? `${parentRoute}.${key}` : key;
    const name = get(siblingRoutes[key], 'name');

    return { route, name, arrow: arrow.repeat(level + 1) };
  }
});
