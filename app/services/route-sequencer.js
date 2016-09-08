import Ember from 'ember';

const {
  Service,
  computed,
  get
} = Ember;

const { inject: { service } } = Ember;

export default Service.extend({
  intl: service(),

  routes: computed({
    get() {
      const t = (name) => {
        return get(this, 'intl').t(`application.routes.${name}`);
      };

      return {
        engine: {
          name: t('affinityEngine'),
          routes: {
            'index': {
              name: t('engine')
            }, 'installation': {
              name: t('installation'),
              routes: {
                'helpful-links': {
                  name: t('helpfulLinks')
                }, 'quick-start': {
                  name: t('quickStart')
                }
              }
            }, 'configuration': {
              name: t('configuration')
            }, 'fixtures': {
              name: t('fixtures')
            }, 'components': {
              name: t('components')
            }, 'plugins': {
              name: t('plugins')
            }
          }
        }, 'menu-bar': {
          name: t('menuBar')
        }, curtain: {
          name: t('curtain')
        }, plugins: {
          name: t('plugins')
        }
      }
    }
  })
});
