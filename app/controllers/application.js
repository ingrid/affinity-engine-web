import Ember from 'ember';

const {
  Controller
} = Ember;

const { inject: { service } } = Ember;

export default Controller.extend({
  routeSequencer: service()
});
