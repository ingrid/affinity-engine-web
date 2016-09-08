import Ember from 'ember';

const {
  Mixin,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Mixin.create({
  intl: service(),

  titleToken() {
    return get(this, 'intl').t(`application.routes.${get(this, '_titleKey')}`);
  }
});
