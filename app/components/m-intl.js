import Ember from 'ember';
import markdownit from 'markdown-it';
import markdownItHighlight from 'affinity-engine-web/utils/markdown-it-highlight';

const {
  Component,
  computed,
  get,
  isPresent,
  observer
} = Ember;

const { computed: { readOnly } } = Ember;
const { inject: { service } } = Ember;
const { Handlebars: { SafeString } } = Ember;
const { String: { underscore } } = Ember;

const converter = markdownit({
  html: true,
  linkify: true,
  typographer: true
}).use(markdownItHighlight);

function getMatchIndexes(str, toMatch) {
    var re = new RegExp(toMatch, "g"),
        indexMatches = [], match;

    while (match = re.exec(str)) {
        indexMatches.push(match.index);
    }

    return indexMatches;
}

function stringInsertAt(index, string, substring) {
  return string.slice(0, index) + substring + string.slice(index);
}

export default Component.extend({
  intl: service(),
  docVersionTracker: service(),

  _locale: readOnly('i18n.locale'),
  _version: readOnly('docVersionTracker.version'),
  _versions: readOnly('docVersionTracker.versions'),

  text: computed('path', '_locale', '_version', {
    get() {
      const path = get(this, 'path');
      const intl = get(this, 'intl');
      const selectedVersion = get(this, '_version');
      const versions = get(this, '_versions');
      const version = versions.slice(versions.indexOf(selectedVersion)).find((version) => {
        return intl.exists(`${version}.${path}`);
      });
      const key = isPresent(version) ? `${version}.${path}` : path;
      const translation = intl.findTranslationByKey(key);

      let html = converter.render(translation);
      html.replace(/<a /g, '<a target="_blank"');

      return html;
    }
  }),

  didRender(...args) {
    this._super(...args);

    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((tag) => {
      this.$(tag).each(function() {
        const $elem = Ember.$(this);
        const text = underscore($elem.text());
        const href = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${text}${window.location.search}`;

        requestAnimationFrame(() => {
          $elem
            .before(`<a class="section-anchor" name="${text}"></a>`)
            .append('<i class="fa fa-link"></i>')
            .attr('data-clipboard-text', href)
            .addClass('section-anchor');

          new Clipboard($elem.get(0));

          if (window.location.hash) {
            const position = Ember.$(`a[name="${window.location.hash.substring(1)}"]`).position();

            if (position) {
              const $main = Ember.$('.main');

              $main.scrollTop(position.top + $main.position().top);
            }
          }
        });
      });
    });
  }
});
