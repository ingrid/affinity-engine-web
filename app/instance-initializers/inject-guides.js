import strings from 'affinity-engine-web/ember-stringify';

function travelDown(object) {
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'object') {
      travelDown(object[key]);
    } else if (key.substring(key.length - 3) === '.md') {
      object[key.substring(0, key.length - 3)] = object[key];
      delete object[key];
    }
  });
}

travelDown(strings);

export function initialize(appInstance) {
  Object.keys(strings).forEach((locale) => {
    appInstance.lookup('service:intl').addTranslations(locale, strings[locale]);
  });
}

export default {
  name: 'inject-guides',
  initialize
};
