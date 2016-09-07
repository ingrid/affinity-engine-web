import Ember from 'ember';

const {
  Route,
  computed,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Route.extend({
  intl: service(),

  init(...args) {
    this._super(...args);

    get(this, 'intl').setLocale('en-us');
  },

  title(tokens = []) {
    tokens.unshift(get(this, '_translatedTitleToken'));

    return tokens.join(' | ');
  },

 _translatedTitleToken: computed({
   get() {
     return get(this, 'intl').t('application.routes.affinityEngine');
   }
 })
});
