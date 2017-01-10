import Ember from 'ember';

const {
  Controller
} = Ember;

const { computed: { alias } } = Ember;
const { inject: { service } } = Ember;

export default Controller.extend({
  queryParams: ['anchor', 'version'],

  docVersionTracker: service(),
  routeSequencer: service(),

  version: alias('docVersionTracker.version')
});
