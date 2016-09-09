import Ember from 'ember';

const {
  Helper,
  get,
  observer
} = Ember;

const { computed: { readOnly } } = Ember;
const { inject: { service } } = Ember;
const { Handlebars: { SafeString } } = Ember;

const converter = new showdown.Converter();

export default Helper.extend({
  intl: service(),

  _locale: readOnly('i18n.locale'),

  compute(params, interpolations) {
    const key = params[0];
    const intl = get(this, 'intl');
    const translation = intl.t(key, interpolations);
    const html = converter.makeHtml(translation);

    return new SafeString(html.replace(/<a /g, '<a target="_blank"'));
  },

  _recomputeOnLocaleChange: observer('_locale', function() {
    this.recompute();
  })
});
