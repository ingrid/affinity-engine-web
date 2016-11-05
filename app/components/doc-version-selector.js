import Ember from 'ember';

const {
  Component,
  computed,
  get,
  set
} = Ember;

const { computed: { readOnly } } = Ember;
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
    return `${version.replace('-', '.')}.0`;
  },

  actions: {
    changeVersion(version) {
      set(this, 'docVersionTracker.version', version.substring(0, version.length - 2).replace('.', '-'));
    }
  }
});
