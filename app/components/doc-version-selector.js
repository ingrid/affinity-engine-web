import Ember from 'ember';

const {
  Component,
  computed,
  get,
  set
} = Ember;

const { inject: { service } } = Ember;

export default Component.extend({
  classNames: ['ember-power-select-container'],

  docVersionTracker: service(),

  formattedSelectedVersion: computed('docVersionTracker.version', {
    get() {
      return this._formatVersion(get(this, 'docVersionTracker.version'));
    }
  }),

  formattedVersions: computed({
    get() {
      return get(this, 'docVersionTracker.versions').map((version) => {
        return this._formatVersion(version);
      });
    }
  }),

  _formatVersion(version) {
    return `v${version.replace(/\_/g, '.')}`;
  },

  actions: {
    changeVersion(version) {
      set(this, 'docVersionTracker.version', version.substring(1).replace(/\./g, '_'));
    }
  }
});
