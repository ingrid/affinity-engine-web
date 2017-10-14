import Ember from 'ember';

const {
  Helper,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Helper.extend({
  versionTracker: service('doc-version-tracker'),

  _compareVersion(operator, version, threshold) {
    switch (operator[0]) {
      case '<': return version < threshold ? true : version > threshold ? false : null;
      case '>': return version > threshold ? true : version < threshold ? false : null;
      case '=': return version < threshold ? false : version > threshold ? false : null;
    }
  },

  init(...args) {
    this._super(...args);

    this.addObserver('versionTracker.version', this, 'recompute');
  },

  compute([operator, threshold]) {
    if (!operator) return true;

    const version = get(this, 'versionTracker.version');
    const versionNumbers = version.split('_');
    const thresholdNumbers = threshold.split('.');

    for (let i = 0; i < thresholdNumbers.length; ++i) {
      const shouldDisplay = this._compareVersion(operator, versionNumbers[i], thresholdNumbers[i]);

      if (shouldDisplay !== null) return shouldDisplay;
    }

    return operator.indexOf('=') > -1 ? true : false;
  }
});
