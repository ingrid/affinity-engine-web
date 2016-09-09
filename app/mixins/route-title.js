import Ember from 'ember';

const {
  Mixin,
  computed,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Mixin.create({
  routeSequencer: service(),

  titleToken() {
    return get(this, '_translatedToken');
  },

  _translatedToken: computed({
    get() {
      return get(this, `routeSequencer.routes.${get(this, 'routeName').split('.').join('.routes.')}.name`);
    }
  })
});
