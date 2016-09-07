import Ember from 'ember';

const {
  Route,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Route.extend({
  intl: service(),

  titleToken() {
    return get(this, 'intl').t('application.routes.components');
  }
});
