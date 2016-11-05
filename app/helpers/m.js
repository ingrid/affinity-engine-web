import Ember from 'ember';
import markdownit from 'markdown-it';
import markdownItHighlight from 'affinity-engine-web/utils/markdown-it-highlight';

const {
  Helper,
  get,
  isPresent,
  observer
} = Ember;

const { computed: { readOnly } } = Ember;
const { inject: { service } } = Ember;
const { Handlebars: { SafeString } } = Ember;

const converter = markdownit({
  html: true,
  linkify: true,
  typographer: true
}).use(markdownItHighlight);

export default Helper.extend({
  intl: service(),
  docVersionTracker: service(),

  _locale: readOnly('i18n.locale'),
  _version: readOnly('docVersionTracker.version'),
  _versions: readOnly('docVersionTracker.versions'),

  compute(params) {
    const intl = get(this, 'intl');
    const selectedVersion = get(this, '_version');
    const versions = get(this, '_versions');
    const version = versions.slice(versions.indexOf(selectedVersion)).find((version) => {
      return intl.exists(`${version}.${params[0]}`);
    });
    const key = isPresent(version) ? `${version}.${params[0]}` : params[0];
    const translation = intl.findTranslationByKey(key);
    const html = converter.render(translation);

    return new SafeString(html.replace(/<a /g, '<a target="_blank"'));
  },

  _recomputeOnLocaleChange: observer('_locale', function() {
    this.recompute();
  })
});
