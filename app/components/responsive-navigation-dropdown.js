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
  routeSequencer: service(),

  currentRouteName: alias('applicationController.currentRouteName'),

  startIndex: 0,

  init(...args) {
    this._super(...args);

    set(this, 'applicationController', getOwner(this).lookup('controller:application'));
  },

  title: computed('currentRouteName', {
    get() {
      const { startIndex, depth } = getProperties(this, 'startIndex', 'depth');
      const routes = get(this, 'routeSequencer.routes');

      return get(this, 'currentRouteName').split('.').reduce((paths, segment) => {
        const previousPath = paths[paths.length - 1];

        paths.push(isPresent(previousPath) ? `${previousPath}.routes.${segment}` : segment);

        return paths;
      }, []).map((path) => get(routes, `${path}.name`)).filter((name) => isPresent(name)).slice(startIndex, depth).join(' | ');
    }
  })
});
